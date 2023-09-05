import { createAction, props } from '@ngrx/store';
import { CarRepair } from '../model/car-repair.model';

export const fetchCarRepairsList = createAction(
  '[CarRepairsList] Fetch Car Repairs List',
);

export const fetchCarRepairsListSuccess = createAction(
  '[CarRepairsList] Fetch Car Repairs List Success',
  props<{ carRepairs: CarRepair[] }>(),
);

export const fetchCarRepairsListFail = createAction(
  '[CarRepairsList] Fetch Car Repairs List Fail',
);

export const advanceCarRepair = createAction(
  '[CarRepairsList] Advance Car Repair',
  props<{ carRepair: CarRepair }>(),
);

export const advanceCarRepairSuccess = createAction(
  '[CarRepairsList] Advance Car Repair Success',
  props<{ carRepair: CarRepair }>(),
);

export const advanceCarRepairFail = createAction(
  '[CarRepairsList] Advance Car Repair Fail',
);
