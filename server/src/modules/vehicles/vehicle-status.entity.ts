import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class VehicleStatus extends Model<VehicleStatus> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;
}
