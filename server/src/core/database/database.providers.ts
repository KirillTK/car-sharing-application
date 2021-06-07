import { Sequelize } from 'sequelize-typescript';
import { User } from '../../modules/users/user.entity';
import { UserRoles } from '../../modules/users/user-roles.entity';
import { UserGender } from '../../modules/users/user-gender.entity';
import { Countries, UserAccidents } from '../../modules/users/entities';
import { VehicleBrand } from './../../modules/vehicles/vehicle-brand.entity';
import { VehicleStatus } from './../../modules/vehicles/vehicle-status.entity';
import { VehicleImages, CarGeneration, VehicleCountries } from './../../modules/vehicles/entities';
import { Vehicle } from './../../modules/vehicles/vehicle.entity';

import { Bill, BookingStatus, PromoCode, Payments } from './../../modules/bills/entities';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      try {
        const sequelize = new Sequelize(process.env.DATABASE_URL);
        sequelize.addModels([
          UserRoles,
          UserGender,
          Countries,
          UserAccidents,
          User,
          
          VehicleImages,
          VehicleBrand,
          CarGeneration,
          VehicleCountries,
          VehicleStatus,
          Vehicle,

          BookingStatus,
          PromoCode,
          Payments,
          Bill,
        ]);
        await sequelize.sync();
        return sequelize;
      } catch (error) {
        console.log(error);
      }
    },
  },
];
