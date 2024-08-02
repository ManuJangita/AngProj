import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../service/user.service";
@Injectable()
export class AuthGurd implements CanActivate{
    isLoggedIn :boolean=false;
    constructor(private user:UserService) { 
        this.user.getUserSubject().subscribe((userStatus) => {
            this.isLoggedIn = userStatus.loginStatus
        })
    }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.isLoggedIn;
 }
 ngOnInit(){
    
 }
}