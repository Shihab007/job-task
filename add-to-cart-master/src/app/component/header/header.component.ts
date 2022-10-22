import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  public searchTerm !: string;
  constructor(
    private _apiService: ApiService,
    public firebaseService: FirebaseService,
    private router: Router) { }
  public isLoggedIn: any;

  ngOnInit(): void {
    this.isLoggedIn = this.firebaseService.isLoggedIn;
  }

  getLoginInfo() {
    if (this.firebaseService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }


  // getUserData() {
  //   console.log('hello');

  //   this._apiService.getUserData(this.entity.email).subscribe(res => {
  //     console.log('user data');

  //     console.log(res.data[0]);
  //     if (res.code === 200) {
  //       // this.router.navigate(['/']);
  //       if (res.data[0].email === 'shihab4461@gmail.com') {
  //         this.router.navigate(['/admin']);
  //         this.isSingedIn = true;
  //       } else {
  //         this.router.navigate(['/dashboard']);
  //         this.isSingedIn = true;
  //       }
  //     } else {
  //       alert('Error')
  //     }
  //   });
  // }
}
