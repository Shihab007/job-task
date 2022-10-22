import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService, public router: Router, private _apiService: ApiService,) { }

  ngOnInit(): void {
  }
  logout() {
    this.firebaseService.logout()
    this.isLogout.emit();
    this.router.navigate(["/login"]);
  }

  // getOrderbyCustomerMail() {
  //   this._apiService.getOrderbyCustomerMail(this.entity.email).subscribe(res => {
  //     console.log('user data');

  //     console.log(res.data[0]);
  // if (res.code === 200) {
  //   // this.router.navigate(['/']);
  //   if (res.data[0].email === 'shihab4461@gmail.com') {
  //     this.router.navigate(['/admin']);
  //     this.isSingedIn = true;
  //   } else {
  //     this.router.navigate(['/dashboard']);
  //     this.isSingedIn = true;
  //   }
  // } else {
  //   alert('Error')
  // }
  // });


}

