import { Inject, Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { CarRepair } from './model/car-repair.model';
import { mapTo } from 'rxjs/operators';
import { FAKE_CAR_REPAIRS } from './car-repairs.module';

export const repairsLoadingTime = 1000;
export const advanceRepairTime = 200;

@Injectable({
  providedIn: 'root',
})
export class CarRepairsListService {

  constructor(@Inject(FAKE_CAR_REPAIRS) private fakeCarRepairs: CarRepair[]) {
  }

  public fetchCarRepairs(): Observable<CarRepair[]> {
    return timer(repairsLoadingTime).pipe(
      mapTo(this.fakeCarRepairs),
    );
  }

  public advanceCarRepair(carRepair: CarRepair): Observable<CarRepair> {
    return timer(advanceRepairTime).pipe(
      mapTo({
        ...carRepair,
        state: carRepair.state === 'New' ? 'In progress' : 'Done',
      }),
    );
  }
}
