import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'payroll';
  isLoggedIn:boolean=false;
  
  constructor(private user:UserService) {
  }
 ngOnInit() {
  // setInterval(() => {
  //   this.isLoggedIn = this.user.isLoggedIn;
  // },15000)
    // this.isLoggedIn = this.user.isLoggedIn;
    this.user.getUserSubject().subscribe((userStatus) => {
      this.isLoggedIn = userStatus.loginStatus
    })
  }
}
