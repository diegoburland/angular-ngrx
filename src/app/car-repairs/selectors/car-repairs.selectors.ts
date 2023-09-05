import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCarRepairs from '../reducers/index';
import * as fromCarRepairsList from '../reducers/car-repairs-list.reducer';

export const selectCarRepairsState = createFeatureSelector<fromCarRepairs.State>(
  fromCarRepairs.carRepairsFeatureKey,
);

export const selectCarRepairsListState = createSelector(
  selectCarRepairsState,
  state => state[fromCarRepairsList.carRepairsListFeatureKey],
);

export const selectIsFetching = undefined; // TODO: implement

export const selectIsFetchingNeeded = undefined; // TODO: implement

export const selectAllCarRepairs = undefined; // TODO: implement

export const selectNewRepairs = undefined; // TODO: implement

export const selectInProgressRepairs = undefined; // TODO: implement

export const selectDoneRepairs = undefined; // TODO: implement

export const selectTotalOfNewCarRepairs = undefined; // TODO: implement

export const selectTotalOfInProgressCarRepairs = undefined; // TODO: implement

export const selectTotalOfDoneCarRepairs = undefined; // TODO: implement
