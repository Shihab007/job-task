import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { LoginDataRequest } from './login-data-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public entity: LoginDataRequest = new LoginDataRequest();
  form!: FormGroup;
  title = 'firebase-angular-auth';
  isSingedIn = false;
  showSignIn = true;
  showSignUp = false;

  constructor(public firebaseService: FirebaseService,
    private _apiService: ApiService,
    private _fb: FormBuilder,
    public router: Router
  ) { }
  registerPage() {
    this.showSignUp = true;
    this.showSignIn = false;
  }
  loginPage() {
    this.showSignUp = false;
    this.showSignIn = true;
  }
  ngOnInit() {
    console.log('firebase');
    console.log(this.firebaseService.firebaseAuth.credential);



    if (localStorage.getItem('user') !== null)
      this.isSingedIn = true
    else
      this.isSingedIn = false


  }
  async onSignup(email: string, password: string) {
    debugger
    this._apiService.onSigninCustom(this.entity).subscribe(res => {
      console.log(res);
      if (res.code === 200) {
        // this.router.navigate(['/']);

      } else {
        alert('Error')
      }
    });
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSingedIn = true;
      // this.router.navigate(["/dashboard"])

    }

    await this.getUserData();

  }
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSingedIn = true;
    // this.router.navigate(["/dashboard"]);


    console.log('entity');
    console.log(this.entity);


    await this.getUserData();
  }


  getUserData() {
    console.log('hello');

    this._apiService.getUserData(this.entity.email).subscribe(res => {
      console.log('user data');

      console.log(res.data[0]);
      if (res.code === 200) {
        // this.router.navigate(['/']);
        if (res.data[0].email === 'shihab4461@gmail.com') {
          this.router.navigate(['/admin']);
          this.isSingedIn = true;
        } else {
          this.router.navigate(['/dashboard']);
          this.isSingedIn = true;
        }
      } else {
        alert('Error')
      }
    });
  }



  handleLogout() {

    this.isSingedIn = false;
  }

}

