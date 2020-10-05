import { Component, OnInit } from '@angular/core';

import { HackerNewsService } from '../hacker-news.service';
import { Item } from '../item';

@Component({
  selector: 'app-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.css']
})
export class MyInterestsComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private service: HackerNewsService,
  ) {}

  getNewestStories(): void {
    this.service.getNewestStoriesIds().subscribe(id => this.GetItemInfo(id));
  }

  GetItemInfo(ids: String[]): void {
    for(let i = 0; i < 25; i++) {
      this.service.GetItemInfo(ids[i]).subscribe(item => this.items.push(item));
    }
  }

  ngOnInit() {
    this.getNewestStories();
  }

}
