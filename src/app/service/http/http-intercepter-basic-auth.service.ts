import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { request } from 'http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService  implements HttpInterceptor{

  constructor() { } 
   intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
 
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })  
    return next.handle(request);
   }

}
