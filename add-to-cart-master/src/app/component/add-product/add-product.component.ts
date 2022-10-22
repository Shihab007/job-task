import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AddProductRequest } from './add-product-request';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public entity: AddProductRequest = new AddProductRequest();
  constructor(private _apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {

    console.log('entity');
    console.log(this.entity);

    this._apiService.addProduct(this.entity).subscribe(res => {
      console.log(res);
      if (res.code === 200) {
        this.router.navigate(['/']);

      } else {
        alert('Error')
      }
    });
  }
}



