import { AddVehicleDto } from './dto/add-vehicle.dto';
import { Controller, Get, Patch, Param, Body, Post } from '@nestjs/common';
import { VehicleDto } from './dto/vehicle.dto';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  async findAll() {
    return await this.vehiclesService.findAll();
  }

  @Get('/:id')
  async findById(@Param() params) {
    return await this.vehiclesService.findOne(params.id);
  }

  @Patch('/:id')
  async updateVehicle(@Param() params, @Body() vehicle: VehicleDto) {
    return await this.vehiclesService.updateOne(params.id, vehicle);
  }

  @Post()
  async addVehicle(@Body() vehicle: AddVehicleDto) {
    return await this.vehiclesService.create(vehicle);
  }
}
