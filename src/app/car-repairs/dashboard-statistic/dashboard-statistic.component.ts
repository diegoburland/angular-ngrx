import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-statistic',
  templateUrl: './dashboard-statistic.component.html',
  styleUrls: ['./dashboard-statistic.component.css'],
})
export class DashboardStatisticComponent {
  @Input() public value: number | null = null;
  @Input() public label: string = '';
}
