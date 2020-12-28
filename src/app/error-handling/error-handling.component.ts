import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  errorMessage ='Ops! An Error occurred'

  constructor() { }

  ngOnInit(): void {
  }

}
