import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class PromoCode extends Model<PromoCode> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  code: string;
}
