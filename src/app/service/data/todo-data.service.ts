import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {



  constructor(
    private http:HttpClient
  ) { }


  retrieveAllTodos(username: string) {
    //  console.log('works1')
  
      return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
      //  return this.http.get('http://localhost:8080/hello-world-bean');
  
    }
    
}
