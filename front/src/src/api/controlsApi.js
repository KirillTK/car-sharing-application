import { Api } from './api';



class ControlsApi extends Api {
  getGenderList() {
    return this.api.get('controls/user/gender');
  }

  getUserCountriesList() {
    return this.api.get('controls/user/countries');
  }

  getVehicleStatuses() {
    return this.api.get('controls/car/status');
  }

  getCarBrandsList() {
    return this.api.get('controls/car/brands');
  }

  getCarGenerationList() {
    return this.api.get('controls/car/generation');
  }

  getCarCountries() {
    return this.api.get('controls/car/countries');
  }

  getBillStatuses() {
    return this.api('controls/bill/statuses');
  }

  getBillPayments() {
    return this.api('controls/bill/payments');
  }
}

export default new ControlsApi();