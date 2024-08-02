import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
 
userName  = "";
password = "";
isInValid: boolean = false;
constructor(private router: Router , private user:UserService) {
  
}
ngOnInit() {
  
}
handleForm(){
if(this.userName == "admin" && this.password == "admin"){
  alert("login successfully");
  this.isInValid = false;
  this.router.navigateByUrl('/company');
  this.user.setUserSubject({loginStatus: true, userName: this.userName});
}else{
this.isInValid = true;
this.user.setUserSubject({loginStatus: false, userName: ''});
}
}
}
