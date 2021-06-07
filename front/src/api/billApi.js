import { BOOKING_STATUSES } from '../constants/common.const';
import { Api } from './api';


class BillApi extends Api {
  billCar(billValues) {
    return this.api.post('/bills', { ...billValues, promoCode: null, bookingStatusId: BOOKING_STATUSES.START });
  }

  getYouCar(userId) {
    return this.api.get(`bills/current/${userId}`);
  }

  finishRide(billId, vehicleId) {
    return this.api.post(`bills/finish/${billId}/${vehicleId}`);
  }

  getBillUserHistory(userId) {
    return this.api.get(`bills/history/${userId}`);
  }
}

export default new BillApi();
