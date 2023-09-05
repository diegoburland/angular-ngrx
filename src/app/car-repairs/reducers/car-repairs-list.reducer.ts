import { createReducer } from '@ngrx/store';

export const carRepairsListFeatureKey = 'carRepairsList';

export interface State {
  isFetching: boolean;
  hasError: boolean;
  hasFetched: boolean;
}

export const initialState: State = {
  isFetching: false,
  hasError: false,
  hasFetched: false,
};

export const reducer = createReducer(
  initialState,
);

