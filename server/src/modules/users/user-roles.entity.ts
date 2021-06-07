import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class UserRoles extends Model<UserRoles> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
