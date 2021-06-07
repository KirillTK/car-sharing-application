import { VehicleDto } from './vehicle.dto';
import { IsNotEmpty, MinLength } from 'class-validator';

export class AddVehicleDto extends VehicleDto {
  @MinLength(6)
  @IsNotEmpty()
  readonly image: string;

  @IsNotEmpty()
  readonly odometer: number;

  @IsNotEmpty()
  readonly carGenerationId: number;

  @IsNotEmpty()
  readonly vehicleCountriesId: number;
}