import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarRepairsDashboardComponent } from './car-repairs/car-repairs-dashboard/car-repairs-dashboard.component';
import { CarRepairsListComponent } from './car-repairs/car-repairs-list/car-repairs-list.component';
import { CarRepairsResolve } from './car-repairs/resolvers/car-repairs.resolve';

export const routes: Routes = [
  {
    path: 'car-repairs',
    component: CarRepairsDashboardComponent,
    resolve: {carRepairs: CarRepairsResolve},
  },
  {
    path: 'car-repairs/list',
    component: CarRepairsListComponent,
    resolve: {carRepairs: CarRepairsResolve},
  },
  {
    path: '**',
    redirectTo: 'car-repairs',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
