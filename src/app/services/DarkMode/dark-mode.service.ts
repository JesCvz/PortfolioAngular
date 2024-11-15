import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private darkModeSubject = new BehaviorSubject<boolean>(false);

  darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  toggleDarkMode():void{
    this.darkModeSubject.next(!this.darkModeSubject.value);
    localStorage.setItem('darkMode', this.darkModeSubject.value ? 'true' : 'false');
  }

  setDarkMode(newValue:boolean): void{
    this.darkModeSubject.next(newValue);
    localStorage.setItem('darkMode', newValue.toString());
  }
 
}
