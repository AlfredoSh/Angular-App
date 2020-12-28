import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class HardcodedAuthenticationService {

  isUserLoggedIn2 =  this.isUserLoggedIn();
  constructor() { }

  authenticate(username: string, password: string) {
   // console.log('before' + this.isUserLoggedIn())
    if (username == 'Alfredo' && password == '123') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;

    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null) 
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}
