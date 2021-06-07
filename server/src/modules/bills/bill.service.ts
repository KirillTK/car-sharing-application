import { VehiclesService } from './../vehicles/vehicles.service';
import { Injectable, Inject } from '@nestjs/common';
import { Bill } from './entities/bill.entity';
import { BookingStatus, Payments } from './entities';
import { Vehicle } from '../vehicles/vehicle.entity';


const BOOKING_STATUSES = {
  START: 1,
  FINISHED: 2,
}

@Injectable()
export class BillService {
  constructor(
    @Inject('BILL_PROVIDER')
    private readonly billRepository: typeof Bill,
    private readonly vehicleservice: VehiclesService,
  ) {}

  async addBill(billValues): Promise<Bill> {
    const bill = await this.billRepository.create<Bill>(billValues);

    await this.vehicleservice.changeFreeStatusForCar(billValues.vehicleId, false);

    return bill;
  }
  
  async getCurrentCar(userId: number) {
     return this.billRepository.findOne<Bill>({ where: { userId, bookingStatusId: BOOKING_STATUSES.START }, include: [
        { model: BookingStatus },
        { model: Payments },
        { model: Vehicle },
      ]})
  }

  async finishRide(billId, vehicleId) {
    await this.vehicleservice.changeFreeStatusForCar(vehicleId, true);

    return this.billRepository.update({
      bookingStatusId: BOOKING_STATUSES.FINISHED,
    }, { where : { id: billId }});
  }

  async getBillUserHistory(userId) {
   return this.billRepository.findAll<Bill>({
     where: { userId },
     include: [
      { model: BookingStatus },
      { model: Payments },
      { model: Vehicle },
     ]
   }) 
  }
}
