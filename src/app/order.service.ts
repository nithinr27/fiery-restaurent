import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from '../Models/order';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  order:order=new order;
  url: string = 'http://localhost:3000/orders';
  getAll() {
    return this.http.get<order[]>(this.url);
  }
  getorderbyOrderNo(order_no:any):Observable<order>{
    return this.http.get<order>(`${this.url}/${order_no}`)
 
  }
}
