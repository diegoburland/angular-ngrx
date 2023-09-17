import { Component } from '@angular/core';
import { CarRepair } from '../model/car-repair.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as fromCarRepairsActions from '../actions/car-repairs-list.actions';
import * as fromCarRepairsSelectors from '../selectors/car-repairs.selectors';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-car-repairs-list',
  templateUrl: './car-repairs-list.component.html',
  styleUrls: ['./car-repairs-list.component.css'],
})
export class CarRepairsListComponent {
  public advanceCarRepair(carRepair: CarRepair) {
    this.store.dispatch(fromCarRepairsActions.advanceCarRepair({ carRepair }));
  }
  public $isFetching: Observable<boolean> = of(false);
  public $isFetchingNeeded: Observable<boolean> = of(false);
  public $carNewRepairsList: Observable<CarRepair[]> = of([]);
  public $carInProgressRepairsList: Observable<CarRepair[]> = of([]);
  public $carDoneRepairsList: Observable<CarRepair[]> = of([]);

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.$isFetchingNeeded = this.store.select(
      fromCarRepairsSelectors.selectIsFetchingNeeded
    );

    this.$isFetchingNeeded.subscribe((isFetchingNeeded) => {
      if (isFetchingNeeded) {
        this.store.dispatch(
          fromCarRepairsActions.fetchCarRepairsListSuccess({
            carRepairs: this.route.snapshot.data.carRepairs,
          })
        );
      }
    });

    this.$carNewRepairsList = this.store.select(
      fromCarRepairsSelectors.selectNewRepairs
    );
    this.$carInProgressRepairsList = this.store.select(
      fromCarRepairsSelectors.selectInProgressRepairs
    );
    this.$carDoneRepairsList = this.store.select(
      fromCarRepairsSelectors.selectDoneRepairs
    );
    this.$isFetching = this.store.select(
      fromCarRepairsSelectors.selectIsFetching
    );
  }
}
