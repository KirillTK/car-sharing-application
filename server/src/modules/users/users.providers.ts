import { User } from './user.entity';
import { UserRoles } from './user-roles.entity';
import { UserGender } from './user-gender.entity';
import { Countries } from './entities/countries.entiry';
import { UserAccidents } from './entities/user-accident.entiry';

export const usersProviders = [
  {
    provide: 'USER_GENDER_PROVIDER',
    useValue: UserGender,
  },
  {
    provide: 'USER_ROLES_PROVIDER',
    useValue: UserRoles,
  },
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
  {
    provide: 'USER_COUNTRY_REPOSITORY',
    useValue: Countries,
  },
  {
    provide: 'USER_ACCIDENTS_REPOSITORY',
    useValue: UserAccidents,
  },
];
