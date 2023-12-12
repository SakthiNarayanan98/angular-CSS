// passenger.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {

  // private 
  public adultsSubject = new BehaviorSubject<number>(0);
  public childrenSubject = new BehaviorSubject<number>(0);

  adults$ = this.adultsSubject.asObservable();
  children$ = this.childrenSubject.asObservable();

  incrementAdults() {
    this.adultsSubject.next(this.adultsSubject.value + 1);
  }

  decrementAdults() {
    if (this.adultsSubject.value > 0) {
      this.adultsSubject.next(this.adultsSubject.value - 1);
    }
  }

  incrementChildren() {
    this.childrenSubject.next(this.childrenSubject.value + 1);
  }

  decrementChildren() {
    if (this.childrenSubject.value > 0) {
      this.childrenSubject.next(this.childrenSubject.value - 1);
    }
  }

  getAdultsCount() {
    return this.adultsSubject.value;
  }

  getChildrenCount() {
    return this.childrenSubject.value;
  }

  getTotalCount() {
    return this.adultsSubject.value + this.childrenSubject.value;
  }
}
