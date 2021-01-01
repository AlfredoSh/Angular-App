import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


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
  todos: Todo[] 
//  todos:Todo[]

 // todos=[]
  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit() {
   this.todoService.retrieveAllTodos('Alfredo').subscribe(
      response => {
        console.log('Array is coming')
        console.log(response);
        console.log('Array Finished')

        this.todos=response;
      }
    ) 
  }

}
