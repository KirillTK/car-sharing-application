import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class UserAccidents extends Model<UserAccidents> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  accident: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  userId: number;
}
