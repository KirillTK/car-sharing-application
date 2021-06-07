import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class VehicleCountries extends Model<VehicleCountries> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country: string;
}
