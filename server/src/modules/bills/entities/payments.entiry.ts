import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Payments extends Model<Payments> {
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  cardNumber: number;
}
