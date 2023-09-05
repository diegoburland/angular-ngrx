import { Component } from '@angular/core';
import { CarRepair } from '../model/car-repair.model';

@Component({
  selector: 'app-car-repairs-list',
  templateUrl: './car-repairs-list.component.html',
  styleUrls: ['./car-repairs-list.component.css'],
})
export class CarRepairsListComponent {
  public advanceCarRepair(carRepair: CarRepair) {
  }
}
