import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {Awesome} from '../model/awesome';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Awesome[]> {
    return this.http.get<Awesome[]>(
      environment.api_url + "/awesomes")
  }
  create(awesome: Awesome): Observable<Awesome> {
    return this.http.post<Awesome>(
      environment.api_url + "/awesomes", awesome)
  }
  delete(id: any) {
    return this.http.delete(
      `${environment.api_url + "/awesomes"}/${id}`
    )
  }

  update( id: any, awesome: Awesome): Observable<Awesome> {
    return this.http.put<Awesome>(
      `${environment.api_url + "/awesomes"}/${id}`, awesome
    )
  }
  getById(id: any): Observable<Awesome> {
    return this.http.get<Awesome>(
      `${environment.api_url + "/awesomes"}/${id}`
    )
  }
}
