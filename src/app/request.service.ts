import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  result: any;
  cardArray: any[] = [];

  constructor(private http: HttpClient) { }

  getRequest(url: string): Observable<any> {
    return this.http.get(url);
  }
}
