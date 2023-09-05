import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCarRepairsList from './car-repairs-list.reducer';

export const carRepairsFeatureKey = 'carRepairs';

export interface State {
  [fromCarRepairsList.carRepairsListFeatureKey]: fromCarRepairsList.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCarRepairsList.carRepairsListFeatureKey]: fromCarRepairsList.reducer,
};
