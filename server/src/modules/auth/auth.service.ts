import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    // find if user exist with this email
    const user = await this.userService.findOneByEmail(username);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await this.comparePassword(pass, user.password);

    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async login(user) {
    const userDb = await this.userService.findOneByEmail(user.email);

    if(!userDb) {
      throw new BadRequestException('Invalid credentions');
    }

    const token = await this.generateToken(userDb['dataValues']);
    return { userDb, token };
  }

  public async create(user) {
    // hash the password
    const pass = await this.hashPassword(user.password);

    // create the user
    await this.userService.create({
      ...user,
      password: pass,
    });

    const createdUser = await this.userService.findOneByEmailAndPassword(user.email, pass);

    const newUser = createdUser['dataValues'];

    // generate token
    const token = await this.generateToken(newUser);

    // return the user and the token
    return { user: newUser, token };
  }

  private async generateToken(user) {
    return await this.jwtService.signAsync(user);
  }

  private async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }

  private async comparePassword(enteredPassword, dbPassword) {
    return await bcrypt.compare(enteredPassword, dbPassword);
  }

  async getCurrentUser(token: string) {
    return this.jwtService.verify(token.replace('Bearer ', ''));
  }
}
