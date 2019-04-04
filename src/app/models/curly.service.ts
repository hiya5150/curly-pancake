import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurlyService {

  constructor(private http: HttpClient) { }
// this function fetches the joke from the websie icanhazdadjoke.com
  getRandomJoke(): Observable<any> {
    const url = 'https://icanhazdadjoke.com'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({Accept: 'application/json'})
    });
  }
}
