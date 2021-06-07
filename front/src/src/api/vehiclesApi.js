import { Api } from './api';

class VehiclesApi extends Api {
  getVehiclesList() {
    return this.api.get('vehicles');
  }

  getVehcileById(id) {
    return this.api.get(`vehicles/${id}`);
  }

  updateVehicleById(id, dataToUpdate) {
    return this.api.patch(`vehicles/${id}`, { ...dataToUpdate });
  }

  addVehicle(vehicle) {
    return this.api.post('vehicles', vehicle);
  }
}

export default new VehiclesApi();