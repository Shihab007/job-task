import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeContentComponent } from './component/home-content/home-content.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './component/login/login.component'
import { SignupComponent } from './component/signup/signup.component'
import { AdminComponent } from './component/admin/admin.component';
import { AddProductComponent } from './component/add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'cart/:oid', component: CartComponent },
  { path: 'home-content', component: HomeContentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'add-product', component: AddProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
