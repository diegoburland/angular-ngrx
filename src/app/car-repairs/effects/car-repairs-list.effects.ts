import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as carRepairsListActions from '../actions/car-repairs-list.actions';
import { CarRepairsListService } from '../car-repairs-list.service';
import { map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class CarRepairsListEffects {
  public fetchCarRepairsList = createEffect(() =>
    this.actions$.pipe(
      ofType(carRepairsListActions.fetchCarRepairsList),
      mergeMap(() =>
        this.carRepairsListService.fetchCarRepairs().pipe(
          map((carRepairs) =>
            carRepairsListActions.fetchCarRepairsListSuccess({ carRepairs })
          ),
          catchError(() => [carRepairsListActions.fetchCarRepairsListFail()])
        )
      )
    )
  );

  public advanceCarRepair = createEffect(() =>
    this.actions$.pipe(
      ofType(carRepairsListActions.advanceCarRepair),
      mergeMap(({ carRepair }) =>
        this.carRepairsListService.advanceCarRepair(carRepair).pipe(
          map((carRepair) =>
            carRepairsListActions.advanceCarRepairSuccess({ carRepair })
          ),
          catchError(() => [carRepairsListActions.advanceCarRepairFail()])
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private carRepairsListService: CarRepairsListService
  ) {}
}
