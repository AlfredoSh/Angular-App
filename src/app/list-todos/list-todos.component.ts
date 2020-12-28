import { Component, OnInit } from '@angular/core';


export class Todo {
  constructor(
    public id: number,
    public Description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Angular', false, new Date()),
    new Todo(2, 'Learn Spring', false, new Date())

    // { id: 1, Description: 'Learn Angular' },
    // { id: 2, Description: 'Learn Spring' },
    // { id: 3, Description: 'Be a Full Stack Developer' },


  ]

  // todo ={
  //   id: 1,
  //   Description: 'Learn Angular'

  // }

  constructor() { }

  ngOnInit(): void {
  }

}
