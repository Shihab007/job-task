import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private _productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
    this.getOrder();
  }

  public productList: any[] = [];
  getProduct() {
    this._productService.getProduct().subscribe(res => {
      this.productList = res.data;
      console.log(this.productList);
    });
  }

  public orderList: any[] = [];
  getOrder() {
    this._productService.getOrder().subscribe(res => {
      this.orderList = res.data;
      console.log(this.orderList);
    });
  }

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }


  gotoAddProduct() {
    this.router.navigate(['/add-product'])
  }

  deleteProduct(productId: any) {
    this._productService.deleteProduct(productId).subscribe(
      (res) => {
        this.getProduct();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
