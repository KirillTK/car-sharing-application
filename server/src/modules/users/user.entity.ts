import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserRoles } from './user-roles.entity';
import { UserGender } from './user-gender.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  password: string;

  @ForeignKey(() => UserGender)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  genderId: number;

  @BelongsTo(() => UserGender)
  gender: number;

  @ForeignKey(() => UserRoles)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId: number;

  @BelongsTo(() => UserRoles)
  role: number;
}
