import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) {  }

  get<T>(url: string, Option:Options): Observable<T>{
    return this.httpClient.get<T>(url,Option) as Observable<T>;
  }
}
