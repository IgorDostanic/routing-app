import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseUrl = 'https://hacker-news.firebaseio.com/v0';
  private newestStoriesPath = '/newstories';
  private itemPath = '/item/'

  constructor(private http: HttpClient) { }

  getNewestStoriesIds(): Observable<String[]> {
    return this.http.get<String[]>(this.baseUrl + this.newestStoriesPath + '.json')
      .pipe(
        tap(_ => this.log('Getting latest stories.')),
        catchError(this.handleError<String[]>('getNewestStoriesIds', []))
      );
  }

  GetItemInfo(id: String): Observable<Item> {
    return this.http.get<Item>(this.baseUrl + this.itemPath + id + '.json')
      .pipe(
        tap(_ => this.log('Getting story details')),
        catchError(this.handleError<Item>('GetItemInfo', null))
      );
  }

  private log(message: String, error: boolean = false) {
    if(error) {
      console.error(message);
    } else {
      console.info(message);
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`, true);
      return of(result as T);
    };
  }
}
