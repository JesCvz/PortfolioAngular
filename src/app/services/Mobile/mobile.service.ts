import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private IsMobile = new BehaviorSubject<boolean>(false);
  IsMobile$ = this.IsMobile.asObservable();

  setIsMobile(isMobileValue: boolean) {
    this.IsMobile.next(isMobileValue);
  }
}
