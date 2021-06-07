import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class UserGender extends Model<UserGender> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
