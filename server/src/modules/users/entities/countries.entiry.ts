import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Countries extends Model<Countries> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country: string;
}
