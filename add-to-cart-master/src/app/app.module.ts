import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeContentComponent } from './component/home-content/home-content.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { FirebaseService } from './services/firebase.service';
import { SignupComponent } from './component/signup/signup.component';
import { AdminComponent } from './component/admin/admin.component';
import { AddProductComponent } from './component/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    HomeContentComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA3y-_oBdGFezOMchWmEr5nrkwpi98nTrQ",
      authDomain: "fir-angular-task.firebaseapp.com",
      projectId: "fir-angular-task",
      storageBucket: "fir-angular-task.appspot.com",
      messagingSenderId: "59497741277",
      appId: "1:59497741277:web:483d5239575804a5169434"
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
