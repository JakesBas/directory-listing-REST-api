import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomPath } from './directory-info';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDirectory(): Observable<any> {
    return this.http.get('http://localhost:8000/directory');
  }

  insertDirectory(customPath: CustomPath): Observable<any> {
    return this.http.post('http://localhost:8000/directory', customPath);
  }
}
