import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any[] = [];
  constructor(private _productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this._productService.getProduct().subscribe(res => {
      this.productList = res.data;
      console.log(this.productList);
    });
  }

  goToOrderPage(oid: any) {
    var routerPath = '/cart';
    this.router.navigate([routerPath, oid]);
  }


}
