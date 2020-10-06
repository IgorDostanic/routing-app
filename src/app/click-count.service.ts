import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickCountService {

  private readonly numberOfClicks = new BehaviorSubject<number>(0);
  readonly numberOfClicks$ = this.numberOfClicks.asObservable();

  increment() {
    this.numberOfClicks.next(this.numberOfClicks.getValue() + 1);
  }


  constructor() { }
}
