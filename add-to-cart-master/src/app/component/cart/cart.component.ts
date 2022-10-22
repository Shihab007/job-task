import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartRequest } from './class/cart-request';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  form!: FormGroup;

  constructor(private _apiService: ApiService,
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) {

  }

  ngOnInit(): void {

    this.entity.productId = this.route.snapshot.params["oid"];

  }


  public entity: CartRequest = new CartRequest();
  addOrder() {
    this.entity.price = 0;
    this.entity.name = "";

    console.log('entity');
    console.log(this.entity);

    this._apiService.addOrder(this.entity).subscribe(res => {
      console.log(res);
      if (res.code === 200) {
        this.router.navigate(['/']);

      } else {
        alert('Error')
      }
    });
  }


}

