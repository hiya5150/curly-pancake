import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurlyService {

  constructor(private http: HttpClient) { }
// this function fetches the joke from the websie icanhazdadjoke.com
  getRandomJoke(): Observable<any> {
    return this.http.get('https://icanhazdadjoke.com/j/<joke_id>.png');
  }
}
