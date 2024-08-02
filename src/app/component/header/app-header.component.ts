import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserStatusModel } from '../../model/user.status.module';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent {
    isAuthenticated: boolean = false;
    userName: string = '';
    constructor(private router: Router,private user: UserService) {
    }

    ngOnInit() {    
       this.user.getUserSubject().subscribe(userStatus => {
        this.isAuthenticated = userStatus.loginStatus;
        this.userName = userStatus.userName;
       })
    }

    logout() {
        this.user.setUserSubject({loginStatus: false, userName: ''});
        this.router.navigateByUrl('/');
    }
 }