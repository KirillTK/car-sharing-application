import { Controller, Get } from '@nestjs/common';
import { ControlService } from './controls.service';

@Controller('controls')
export class ControlController {
  constructor(private readonly controlService: ControlService) {}

  @Get('user/countries')
  async getAllUserCountries() {
    return await this.controlService.getAllUserCountries();
  }

  @Get('user/gender')
  async getAllUserGenders() {
    return await this.controlService.getAllUserGenders();
  }

  @Get('car/generation')
  async getAllCarGeneration() {
    return await this.controlService.getAllCarGeneration();
  }

  @Get('car/status')
  async getAllCarStatuses() {
    return await this.controlService.getAllVehicleStatuses();
  }

  @Get('car/countries')
  async getAllCarCountries() {
    return await this.controlService.getAllVehiclesCountries();
  }

  @Get('car/brands')
  async getAllCarBrands() {
    return await this.controlService.getAllVehiclesBrands();
  }

  @Get('/bill/statuses')
  async getBillStatuses() {
    return await this.controlService.getAllBillStatuses();
  }

  @Get('/bill/payments')
  async getAllPaymentsMethod() {
    return await this.controlService.getAllPaymentsMethod();
  }
}
