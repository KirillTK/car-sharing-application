import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class BookingStatus extends Model<BookingStatus> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;
}
