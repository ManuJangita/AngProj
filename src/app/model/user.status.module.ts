export class UserStatusModel{
    userName:string;
    loginStatus:boolean;
constructor(content){
      if(content){
        this.userName = content.userName;
        this.loginStatus = content.loginStatus;
      }
    }
}