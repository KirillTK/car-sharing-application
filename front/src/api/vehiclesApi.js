import { Api } from './api';



class VehiclesApi extends Api {
  getVehiclesList() {
    return this.api.get('vehicles');
  }

  getVehcileById(id) {
    return this.api.get(`vehicles/${id}`);
  }
}

export default new VehiclesApi();