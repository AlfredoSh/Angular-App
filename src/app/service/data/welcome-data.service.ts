import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export class HellowWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {


  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    //  console.log('works1')
    console.log(this.http.get('http://localhost:8080/hello-world-bean'))

    return this.http.get<HellowWorldBean>('http://localhost:8080/hello-world-bean');
    //  return this.http.get('http://localhost:8080/hello-world-bean');

  }

  createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password)
    return basicAuthHeaderString;
  }


  executeHelloWorldWithPathVariable(name: string) {


    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    //  console.log('works1')
    console.log(this.http.get('http://localhost:8080/hello-world-bean'))

    return this.http.get<HellowWorldBean>(`http://localhost:8080/hello-world-bean/variable/${name}`,
    {headers});
    //  return this.http.get('http://localhost:8080/hello-world-bean');

  }
}
