import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { VehicleStatus } from './vehicle-status.entity';
import { VehicleBrand } from './vehicle-brand.entity';
import { CarGeneration } from './entities/car-generation-range.entiry';
import { VehicleImages } from './entities/additional-vehicle-images.entity';
import { VehicleCountries } from './entities/vehicle-country.entity';

@Table
export class Vehicle extends Model<Vehicle> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  odometer: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    unique: false,
  })
  price: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  image: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    unique: false,
  })
  isFree: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  position: string;

  @ForeignKey(() => VehicleStatus)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  statusId: number;

  @BelongsTo(() => VehicleStatus)
  stauts: string;

  @ForeignKey(() => VehicleBrand)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  brandId: number;

  @BelongsTo(() => VehicleBrand)
  brand: string;

  @ForeignKey(() => CarGeneration)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  carGenerationId: number;

  @BelongsTo(() => CarGeneration)
  carGeneration: string;

  @ForeignKey(() => VehicleImages)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  vehicleImagesId: number;

  @BelongsTo(() => VehicleImages)
  vehicleImages: string;

  @ForeignKey(() => VehicleCountries)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  vehicleCountriesId: number;

  @BelongsTo(() => VehicleCountries)
  vehicleCountries: string;
}
