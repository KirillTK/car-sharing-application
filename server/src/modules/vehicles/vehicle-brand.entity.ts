import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class VehicleBrand extends Model<VehicleBrand> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
