import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HellowWorldBean } from './data/welcome-data.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})


export class BasicAuthenticationService {

  // isUserLoggedIn2 =  this.isUserLoggedIn();
  constructor(private http: HttpClient) { }



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
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticaterUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);

            return data;
          }
        )
      );
    //  return this.http.get('http://localhost:8080/hello-world-bean');

  }


  // authenticate(username: string, password: string) {
  //   // console.log('before' + this.isUserLoggedIn())
  //   if (username == 'Alfredo' && password == '123') {
  //     sessionStorage.setItem('authenticaterUser', username);

  //     return true;

  //   } else {
  //     return false;
  //   }
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser')
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token')
    } return null;
  }


  logout() {
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')

  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}