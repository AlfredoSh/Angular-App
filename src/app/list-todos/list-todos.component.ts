import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public dona: boolean,
    public targetData: Date
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
    | undefined
  //  todos:Todo[]

  // todos=[]
  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }
  message: string | undefined

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }


  refreshTodos() {
    this.todoService.retrieveAllTodos('Alfredo').subscribe(
      response => {
        console.log('Array is coming')
        console.log(response);
        console.log('Array Finished')

        this.todos = response;
      }
    )
  }

  deleteTodo(id: any) {
    console.log(`Todo deleted` + id)
    this.todoService.deleteTodo('Alfredo', id).subscribe(
      response => {
        console.log(response);
        this.message = "Delete of Todo " + id + " Successful";
        console.log('ok deleted')
        this.refreshTodos();
      }
    )
  }


  updateTodo(id: any) {
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }



}

