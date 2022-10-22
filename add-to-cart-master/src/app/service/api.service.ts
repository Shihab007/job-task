import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addOrder(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/add-order", data);
  }
  addProduct(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/add-product", data);
  }
  onSigninCustom(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/login-data", data);
  }

  getUserData(email: string): Observable<any> {
    return this.http.post("http://localhost:3000/get-user-data", { email: email });
  }

  getOrderbyCustomerMail(email: string): Observable<any> {
    return this.http.post("http://localhost:3000/get-order-by-customer-mail", { email: email });
  }
}
