import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ClickCountService } from '../click-count.service';
import { takeUntil } from 'rxjs/operators';

import { HackerNewsService } from '../hacker-news.service';
import { Item } from '../item';

@Component({
  selector: 'app-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.css']
})
export class MyInterestsComponent implements OnInit {
  items: Item[] = [];
  numOfClicks: number;
  subscription: Subscription;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private service: HackerNewsService,
    private incrementService: ClickCountService,
  ) {}

  getNewestStories(): void {
    this.subscription = this.service.getNewestStoriesIds()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(id => this.GetItemInfo(id));
  }

  GetItemInfo(ids: String[]): void {
    for(let i = 0; i < 25; i++) {
      this.service.GetItemInfo(ids[i]).subscribe(item => this.items.push(item));
    }
  }

  clicked() {
    this.incrementService.increment();
  }

  ngOnInit() {
    this.getNewestStories();
    this.incrementService.numberOfClicks$.subscribe(numberOfClicks => this.numOfClicks = numberOfClicks)
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

}
