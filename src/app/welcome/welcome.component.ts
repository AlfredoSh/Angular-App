import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HellowWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = "Bem-vindo"
  welcomeMessageFromService: string | undefined
  name = ''

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)

    );
  }



  getWelcomeMessageWithPathVariable() {
  
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );      //console.log('last line')

  }


  handleSuccessfulResponse(response: HellowWorldBean) {
    console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }


  handleErrorResponse(error: { error: { message: string; }; }) {
    console.log(error)
    console.log(error.error)
    console.log(error.error.message)


    this.welcomeMessageFromService = error.error.message;
  }

}

