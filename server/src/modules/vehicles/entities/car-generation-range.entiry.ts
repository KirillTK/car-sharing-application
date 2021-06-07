import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class CarGeneration extends Model<CarGeneration> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  range: string;
}
