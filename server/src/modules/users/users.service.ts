import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { UserGender } from './user-gender.entity';
import { UserRoles } from './user-roles.entity';
import { Countries, UserAccidents } from './entities'

const UserModals = [{ model: UserGender }, { model: UserRoles }, { model: Countries }, { model:  UserAccidents }];
@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email }, include: [{ model: UserGender }, { model: UserRoles }, { model: Countries }] });
  }

  async findOneByEmailAndPassword(email: string, password: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email, password }, include: [{ model: UserGender }, { model: UserRoles }, { model: Countries}] });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
