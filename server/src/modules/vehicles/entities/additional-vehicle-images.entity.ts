import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class VehicleImages extends Model<VehicleImages> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;
}
