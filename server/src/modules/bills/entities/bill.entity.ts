import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { BookingStatus } from './booking-status.entiry';
import { Payments } from './payments.entiry';
import { PromoCode } from './promo-code.entity';
import { User } from '../../users/user.entity';
import { Vehicle } from '../../vehicles/vehicle.entity';

@Table
export class Bill extends Model<Bill> {
  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  totalCost: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  endPlace: string;

  @ForeignKey(() => BookingStatus)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  bookingStatusId: number;

  @BelongsTo(() => BookingStatus)
  bookingStatus: number;

  @ForeignKey(() => Payments)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  paymentId: number;

  @BelongsTo(() => Payments)
  payment: number;

  @ForeignKey(() => PromoCode)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  promoCodeId: number;

  @BelongsTo(() => PromoCode)
  promoCode: number;


  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;


  @BelongsTo(() => User)
  user: number;

  @ForeignKey(() => Vehicle)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  vehicleId: number;


  @BelongsTo(() => Vehicle)
  vehicle: number;
}
