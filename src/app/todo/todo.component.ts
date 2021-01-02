import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    id:number | any
    todo: Todo | any

  constructor(
    private todoService:TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.todo = new Todo(1,'',false, new Date())
    this.id = this.route.snapshot.params['id']
    this.todoService.retrieveTodo('Alfredo',this.id).subscribe(
     data =>  this.todo = data 
    )
  }

}
