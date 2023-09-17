import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCarRepairsActions from '../actions/car-repairs-list.actions';
import * as fromCarRepairsSelectors from '../selectors/car-repairs.selectors';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-repairs-dashboard',
  templateUrl: './car-repairs-dashboard.component.html',
  styleUrls: ['./car-repairs-dashboard.component.css'],
})
export class CarRepairsDashboardComponent {
  public $isFetching: Observable<boolean> = of(false);
  public $isFetchingNeeded: Observable<boolean> = of(false);
  public $totalOfNewCarRepairs: Observable<number> = of(0);
  public $totalOfInProgressCarRepairs: Observable<number> = of(0);
  public $totalOfDoneCarRepairs: Observable<number> = of(0);
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

    this.$isFetching = this.store.select(
      fromCarRepairsSelectors.selectIsFetching
    );
    this.$totalOfNewCarRepairs = this.store.select(
      fromCarRepairsSelectors.selectTotalOfNewCarRepairs
    );
    this.$totalOfInProgressCarRepairs = this.store.select(
      fromCarRepairsSelectors.selectTotalOfInProgressCarRepairs
    );
    this.$totalOfDoneCarRepairs = this.store.select(
      fromCarRepairsSelectors.selectTotalOfDoneCarRepairs
    );
  }
}
