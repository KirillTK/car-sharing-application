import { VehicleBrand } from './vehicle-brand.entity';
import { VehicleStatus } from './vehicle-status.entity';
import { VehicleImages } from './entities/additional-vehicle-images.entity';
import { CarGeneration } from './entities/car-generation-range.entiry';
import { VehicleCountries } from './entities/vehicle-country.entity';
import { Vehicle } from './vehicle.entity';

export const vehiclesProviders = [
  {
    provide: 'VEGCILE_BRANDS_PROVIDER',
    useValue: VehicleBrand,
  },
  {
    provide: 'VEGCILE_STATUS_PROVIDER',
    useValue: VehicleStatus,
  },
  {
    provide: 'VEGCILE_PROVIDER',
    useValue: Vehicle,
  },
  {
    provide: 'VEGCILE_IMAGES_PROVIDER',
    useValue: VehicleImages,
  },
  {
    provide: 'VEGCILE_COUNITY_PROVIDER',
    useValue: VehicleCountries,
  },
  {
    provide: 'VEGCILE_CAR_GENERATION_PROVIDER',
    useValue: CarGeneration,
  },
];
