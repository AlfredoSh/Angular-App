import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }
  ngOnInit(): void {
  }


  handleLogin() {
    //console.log(this.username);
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username]);
      //  console.log('ga', location.href)
    } else {
      console.log(this.password)
      this.invalidLogin = true
    }
  }



  handleBasicAuthLogin() {
    //console.log(this.username);
    this.basicAuthenticationService.executeAuthenticationService(this.username,
      this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username]);

        },
        error => {
          console.log(error)
          this.invalidLogin = false
        }

      )

    //  console.log('ga', location.href)


    // else {
    //   console.log(this.password)
    //   this.invalidLogin = true
    // }
  }

  //Router

}
