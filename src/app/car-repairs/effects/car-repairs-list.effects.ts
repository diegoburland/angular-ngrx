import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as carRepairsListActions from '../actions/car-repairs-list.actions';
import { CarRepairsListService } from '../car-repairs-list.service';

@Injectable()
export class CarRepairsListEffects {
  public fetchCarRepairsList = createEffect(() =>
    this.actions$.pipe(
      ofType(carRepairsListActions.fetchCarRepairsList),
    ),
  );

  public advanceCarRepair = createEffect(() =>
    this.actions$.pipe(
      ofType(carRepairsListActions.advanceCarRepair),
    ),
  );

  constructor(
    private actions$: Actions,
    private carRepairsListService: CarRepairsListService,
  ) {
  }
}
