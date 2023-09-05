import { RepairState } from './repair-state.type';

export interface CarRepair {
  jobNumber: string;
  car: string;
  registrationPlate: string;
  jobType: string;
  needsParts: boolean;
  state: RepairState;
}
