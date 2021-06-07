import { Controller, Get, Param } from '@nestjs/common';
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
}
