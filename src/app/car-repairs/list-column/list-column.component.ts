import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarRepair } from '../model/car-repair.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-column',
  templateUrl: './list-column.component.html',
  styleUrls: ['./list-column.component.css'],
})
export class ListColumnComponent {
  @Input() public name: string = '';
  @Input() public repairs: Observable<CarRepair[]> = of([]);
  @Input() public canAdvance: boolean = false;
  @Output() public advanceRepair: EventEmitter<CarRepair> = new EventEmitter<CarRepair>();

  public advance(repair: CarRepair) {
    this.advanceRepair.emit(repair);
  }
}
