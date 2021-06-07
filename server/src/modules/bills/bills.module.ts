import { VehiclesModule } from './../vehicles/vehicles.module';
import { Module } from '@nestjs/common';
import { billProviders } from './bill.provider';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';

@Module({
  providers: [BillService, ...billProviders],
  exports: [...billProviders],
  imports: [VehiclesModule],
  controllers: [BillController],
})
export class BillsModule {}
