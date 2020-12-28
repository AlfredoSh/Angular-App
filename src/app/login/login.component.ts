import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'Alfredo'
  password = ''
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  handleLogin() {
    //console.log(this.username);
    if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username]);
    //  console.log('ga', location.href)
    } else {
      console.log(this.password)
      this.invalidLogin = true
    }
  }

  //Router
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
  ngOnInit(): void {
  }

}
