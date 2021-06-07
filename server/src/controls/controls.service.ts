import { Injectable, Inject } from '@nestjs/common';
import { CarGeneration, VehicleCountries } from '../modules/vehicles/entities';
import { VehicleStatus } from '../modules/vehicles/vehicle-status.entity';
import { Countries } from '../modules/users/entities'
import { UserGender } from '../modules/users/user-gender.entity'
import { VehicleBrand } from '../modules/vehicles/vehicle-brand.entity'
import { Payments, BookingStatus } from '../modules/bills/entities'


@Injectable()
export class ControlService {
  constructor(
    @Inject('USER_COUNTRY_REPOSITORY')
    private readonly countryRepository: typeof Countries,
    @Inject('VEGCILE_CAR_GENERATION_PROVIDER')
    private readonly carGenerationRepository: typeof CarGeneration,
    @Inject('VEGCILE_COUNITY_PROVIDER')
    private readonly carCountriesRepository: typeof VehicleCountries,
    @Inject('VEGCILE_STATUS_PROVIDER')
    private readonly carStatusesRepository: typeof VehicleStatus,
    @Inject('USER_GENDER_PROVIDER')
    private readonly genderRepository: typeof UserGender,
    @Inject('VEGCILE_BRANDS_PROVIDER')
    private readonly vehicleBrandsRepository: typeof VehicleBrand,
    @Inject('BILL_PAYMENTS_PROVIDER')
    private readonly paymentsRepository: typeof Payments,
    @Inject('BILL_BOOKING_STATUS_PROVIDER')
    private readonly billStatusRepository: typeof BookingStatus,
  ) {}


  getAllUserCountries() {
    return this.countryRepository.findAll();
  }

  getAllUserGenders() {
    return this.genderRepository.findAll();
  }

  getAllCarGeneration() {
    return this.carGenerationRepository.findAll();
  }

  getAllVehicleStatuses() {
    return this.carStatusesRepository.findAll();
  }

  getAllVehiclesCountries() {
    return this.carCountriesRepository.findAll();
  }

  getAllVehiclesBrands() {
    return this.vehicleBrandsRepository.findAll();
  }

  getAllPaymentsMethod() {
    return this.paymentsRepository.findAll();
  }

  getAllBillStatuses() {
    return this.billStatusRepository.findAll();
  }
}
