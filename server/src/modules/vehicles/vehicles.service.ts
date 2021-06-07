import { AddVehicleDto } from './dto/add-vehicle.dto';
import { Injectable, Inject } from '@nestjs/common';

import { Vehicle } from './vehicle.entity';
import { CarGeneration, VehicleCountries } from './entities'
import { VehicleBrand } from './vehicle-brand.entity';
import { VehicleStatus } from './vehicle-status.entity';
import { VehicleDto } from './dto/vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @Inject('VEGCILE_PROVIDER')
    private readonly vehicleRepository: typeof Vehicle,
  ) {}

  async findAll(): Promise<Vehicle[]> {
    return await this.vehicleRepository.findAll<Vehicle>({
      where: { isFree: true },
      include: [{ model: VehicleBrand }, { model: VehicleStatus }, { model: CarGeneration }, { model: VehicleCountries }],
    });
  }

  async findOne(id): Promise<Vehicle> {
      return await this.vehicleRepository.findOne({
          where: { id },
          include: [{ model: VehicleBrand }, { model: VehicleStatus }, { model: CarGeneration }, { model: VehicleCountries }],
      });
  }

  async updateOne(vehicleId: number, vehicle: VehicleDto): Promise<Vehicle> {

    const currentVehicle = await this.findOne(vehicleId);

    return currentVehicle.update(vehicle);
  }

  async create(vehicle: AddVehicleDto): Promise<Vehicle> {
    return this.vehicleRepository.create<Vehicle>(vehicle);
  }

  async changeFreeStatusForCar(vehicleId: number, isFree: boolean) {
    const currentVehicle = await this.findOne(vehicleId);
    return currentVehicle.update({ 
      isFree,
    });
  }
}
