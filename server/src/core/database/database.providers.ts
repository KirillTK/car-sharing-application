import { Sequelize } from 'sequelize-typescript';
import { User } from '../../modules/users/user.entity';
import { UserRoles } from '../../modules/users/user-roles.entity';
import { UserGender } from '../../modules/users/user-gender.entity';
import { VehicleBrand } from './../../modules/vehicles/vehicle-brand.entity';
import { VehicleStatus } from './../../modules/vehicles/vehicle-status.entity';
import { Vehicle } from './../../modules/vehicles/vehicle.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      try {
        const sequelize = new Sequelize(process.env.DATABASE_URL);
        sequelize.addModels([
          User,
          UserRoles,
          UserGender,
          VehicleBrand,
          VehicleStatus,
          Vehicle,
        ]);
        await sequelize.sync();
        return sequelize;
      } catch (error) {
        console.log(error);
      }
    },
  },
];
