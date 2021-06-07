import {  Bill, BookingStatus, Payments, PromoCode } from './entities';

export const billProviders = [
  {
    provide: 'BILL_PROMO_PROVIDER',
    useValue: PromoCode,
  },
  {
    provide: 'BILL_PAYMENTS_PROVIDER',
    useValue: Payments,
  },
  {
    provide: 'BILL_BOOKING_STATUS_PROVIDER',
    useValue: BookingStatus,
  },
  {
    provide: 'BILL_PROVIDER',
    useValue: Bill,
  },
];
