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
  

  
  executeHelloWorldWithPathVariable(name: string) {
    //  console.log('works1')
      console.log(this.http.get('http://localhost:8080/hello-world-bean'))
  
      return this.http.get<HellowWorldBean>(`http://localhost:8080/hello-world-bean/variable/${name}`);
      //  return this.http.get('http://localhost:8080/hello-world-bean');
  
    }
}
