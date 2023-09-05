import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({providedIn: 'root'})
export class CarRepairsResolve implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot) {
  }
}
