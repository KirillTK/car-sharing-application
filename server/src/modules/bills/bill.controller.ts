import { Controller, Get, Patch, Param, Body, Post } from '@nestjs/common';
import { BillService } from './bill.service';

@Controller('bills')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post()
  async addBill(@Body() billValues) {
    return await this.billService.addBill(billValues);
  }

  @Get('/current/:userId')
  async getCurrentCar(@Param() params) {
    return await this.billService.getCurrentCar(params.userId);
  }

  @Post('/finish/:billId/:vehicleId')
  async finishRide(@Param() params) {
    return await this.billService.finishRide(params.billId, params.vehicleId);
  }

  @Get('/history/:userId')
  async getBillUserHistory(@Param() params) {
    return await this.billService.getBillUserHistory(params.userId);
  }
}
