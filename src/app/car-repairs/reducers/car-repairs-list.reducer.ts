import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { CarRepair } from '../model/car-repair.model';
import * as fromCarRepairsActions from '../actions/car-repairs-list.actions';

export const carRepairsListFeatureKey = 'carRepairsList';

export interface State extends EntityState<CarRepair> {
  isFetching: boolean;
  hasError: boolean;
  hasFetched: boolean;
}

export const adapter: EntityAdapter<CarRepair> = createEntityAdapter<CarRepair>(
  {
    selectId: (carRepair: CarRepair) => carRepair.jobNumber,
  }
);
export const initialState: State = adapter.getInitialState({
  isFetching: false,
  hasError: false,
  hasFetched: false,
});

export const reducer = createReducer(
  initialState,

  on(fromCarRepairsActions.fetchCarRepairsList, (state) => ({
    ...state,
    isFetching: true,
    hasError: false,
  })),
  on(
    fromCarRepairsActions.fetchCarRepairsListSuccess,
    (state, { carRepairs }) => {
      return adapter.addMany(carRepairs, {
        ...state,
        isFetching: false,
        hasFetched: true,
      });
    }
  ),
  on(fromCarRepairsActions.fetchCarRepairsListFail, (state) => ({
    ...state,
    isFetching: false,
    hasError: true,
  })),
  on(fromCarRepairsActions.advanceCarRepair, (state, { carRepair }) => {
    return adapter.updateOne(
      {
        id: carRepair.jobNumber,
        changes: {
          ...carRepair,
          state: carRepair.state === 'New' ? 'In progress' : 'Done',
        },
      },
      { ...state, isFetching: true, hasError: false }
    );
  }),
  on(fromCarRepairsActions.advanceCarRepairSuccess, (state, { carRepair }) => ({
    ...state,
    isFetching: false,
  })),
  on(fromCarRepairsActions.advanceCarRepairFail, (state) => ({
    ...state,
    isFetching: false,
    hasError: true,
  }))
);
