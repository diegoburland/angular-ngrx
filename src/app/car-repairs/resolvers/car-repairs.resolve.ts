import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CarRepair } from '../model/car-repair.model';
import { CarRepairsListService } from '../car-repairs-list.service';
import { Store, select } from '@ngrx/store';
import { switchMap, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { adapter } from '../reducers/car-repairs-list.reducer';
import { selectCarRepairsListState } from '../selectors/car-repairs.selectors';

@Injectable({ providedIn: 'root' })
export class CarRepairsResolve implements Resolve<CarRepair[]> {
  constructor(
    private carRepairsService: CarRepairsListService,
    private store: Store
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CarRepair[]> {
    return this.store.select(selectCarRepairsListState).pipe(
      switchMap((state) => {
        if (state.ids.length > 0) {
          return of(adapter.getSelectors().selectAll(state));
        } else {
          return this.carRepairsService.fetchCarRepairs();
        }
      })
    );
  }
}
