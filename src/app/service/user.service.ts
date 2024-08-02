import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { UserStatusModel } from "../model/user.status.module";
@Injectable()
export class UserService {
     private userStatus: UserStatusModel;
     private userSubject: Subject<UserStatusModel> = new BehaviorSubject({
        loginStatus: false,userName: ''});

     getUserSubject(){
        return this.userSubject;
     }
     setUserSubject(userStatus: UserStatusModel){
        this.userSubject.next(userStatus);
     }
}