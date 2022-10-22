import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>("http://localhost:3000/get-product-list")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getOrder() {
    return this.http.get<any>("http://localhost:3000/get-order-list")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteProduct(productOid: number) {
    return this.http.post("http://localhost:3000/delete-product-by-oid", { productOid: productOid });
  }
}
