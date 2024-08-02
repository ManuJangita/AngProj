import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthTocken implements HttpInterceptor{
     token  = 'zzasdjflasjfdlasdfjlj';
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const secureReq = req.clone({
            headers: req.headers.set('authorization-key', this.token)
          });
        return next.handle(secureReq);
    }
    
}