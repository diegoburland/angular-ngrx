import { CarRepair } from './model/car-repair.model';

export const newRepairs: CarRepair[] = [
  {
    jobNumber: '1',
    registrationPlate: 'AD 114315',
    car: 'Toyota Camry',
    jobType: 'oil change',
    needsParts: false,
    state: 'New',
  },
  {
    jobNumber: '2',
    registrationPlate: 'GE 161345',
    car: 'BMW z5',
    jobType: 'fix breaks',
    needsParts: true,
    state: 'New',
  },
];

export const inProgressRepairs: CarRepair[] = [
  {
    jobNumber: '3',
    registrationPlate: 'ER 13005',
    car: 'Opel Zafira',
    jobType: 'replace windshield',
    needsParts: true,
    state: 'In progress',
  },
];

export const doneRepairs: CarRepair[] = [
  {
    jobNumber: '4',
    registrationPlate: 'XF 662341',
    car: 'Opel Astra',
    jobType: 'engine diagnosis',
    needsParts: false,
    state: 'Done',
  },
];

export const allRepairs: CarRepair[] = [
  ...newRepairs,
  ...doneRepairs,
  ...inProgressRepairs,
];
