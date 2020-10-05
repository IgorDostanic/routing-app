import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { HackerNewsService } from '../hacker-news.service';
import { Item } from '../item';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  newsItem: Item;;

  constructor(
    private route: ActivatedRoute,
    private service: HackerNewsService
  ) {}

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.GetItemInfo(id).subscribe(item => this.newsItem = item);
  }

  ngOnInit(): void {
    this.getDetails();
  }
}
