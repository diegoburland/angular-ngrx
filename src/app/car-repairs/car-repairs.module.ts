import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCarRepairs from './reducers';
import { CarRepairsListComponent } from './car-repairs-list/car-repairs-list.component';
import { CarRepairsDashboardComponent } from './car-repairs-dashboard/car-repairs-dashboard.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EffectsModule } from '@ngrx/effects';
import { CarRepairsListEffects } from './effects/car-repairs-list.effects';
import { MatCardModule } from '@angular/material/card';
import { DashboardStatisticComponent } from './dashboard-statistic/dashboard-statistic.component';
import { MatIconModule } from '@angular/material/icon';
import { ListColumnComponent } from './list-column/list-column.component';
import { MatButtonModule } from '@angular/material/button';
import { allRepairs } from './fake-data';

export const FAKE_CAR_REPAIRS = new InjectionToken('Fake data');

@NgModule({
  declarations: [
    CarRepairsListComponent,
    CarRepairsDashboardComponent,
    DashboardStatisticComponent,
    ListColumnComponent,
  ],
  exports: [
    CarRepairsDashboardComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCarRepairs.carRepairsFeatureKey,
      fromCarRepairs.reducers,
    ),
    EffectsModule.forFeature([
      CarRepairsListEffects,
    ]),
    RouterModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: FAKE_CAR_REPAIRS,
      useValue: allRepairs,
    },
  ],
})
export class CarRepairsModule {
}
