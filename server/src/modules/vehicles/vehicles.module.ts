import { Module } from '@nestjs/common';
import { vehiclesProviders } from './vehicles.provider';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';

@Module({
  providers: [VehiclesService, ...vehiclesProviders],
  exports: [...vehiclesProviders, VehiclesService],
  controllers: [VehiclesController],
})
export class VehiclesModule {}
