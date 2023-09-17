import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCarRepairs from '../reducers/index';
import * as fromCarRepairsList from '../reducers/car-repairs-list.reducer';

export const selectCarRepairsState =
  createFeatureSelector<fromCarRepairs.State>(
    fromCarRepairs.carRepairsFeatureKey
  );

export const selectCarRepairsListState = createSelector(
  selectCarRepairsState,
  (state) => state[fromCarRepairsList.carRepairsListFeatureKey]
);

export const selectIsFetching = createSelector(
  selectCarRepairsListState,
  (state: fromCarRepairsList.State) => state.isFetching
);

export const selectIsFetchingNeeded = createSelector(
  selectCarRepairsListState,
  (state: fromCarRepairsList.State) => !state.hasFetched
);

export const selectAllCarRepairs = createSelector(
  selectCarRepairsListState,
  fromCarRepairsList.adapter.getSelectors().selectAll
);

export const selectNewRepairs = createSelector(
  selectAllCarRepairs,
  (carRepairs) => carRepairs.filter((carRepair) => carRepair.state === 'New')
);

export const selectInProgressRepairs = createSelector(
  selectAllCarRepairs,
  (carRepairs) =>
    carRepairs.filter((carRepair) => carRepair.state === 'In progress')
);

export const selectDoneRepairs = createSelector(
  selectAllCarRepairs,
  (carRepairs) => carRepairs.filter((carRepair) => carRepair.state === 'Done')
);

export const selectTotalOfNewCarRepairs = createSelector(
  selectNewRepairs,
  (carRepairs) =>
    carRepairs.filter((carRepair) => carRepair.state === 'New').length
);

export const selectTotalOfInProgressCarRepairs = createSelector(
  selectInProgressRepairs,
  (carRepairs) =>
    carRepairs.filter((carRepair) => carRepair.state === 'In progress').length
);

export const selectTotalOfDoneCarRepairs = createSelector(
  selectDoneRepairs,
  (carRepairs) =>
    carRepairs.filter((carRepair) => carRepair.state === 'Done').length
);
