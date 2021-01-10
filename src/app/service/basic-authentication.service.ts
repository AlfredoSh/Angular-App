import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HellowWorldBean } from './data/welcome-data.service';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})


export class BasicAuthenticationService {

 // isUserLoggedIn2 =  this.isUserLoggedIn();
  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
   // console.log('before' + this.isUserLoggedIn())
    if (username == 'Alfredo' && password == '123') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;

    } else {
      return false;
    }
  }

  executeAuthenticationService(username: string, password: string) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

 
    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    //  console.log('works1')
  //  console.log(this.http.get('http://localhost:8080/hello-world-bean'))

    return this.http.get<AuthenticationBean>(   
         `http://localhost:8080/basicauth`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticaterUser', username);
          return data;
        }
      )
    );
    //  return this.http.get('http://localhost:8080/hello-world-bean');

  }


  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null) 
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}

export class AuthenticationBean {
  constructor(public message:string){}
}