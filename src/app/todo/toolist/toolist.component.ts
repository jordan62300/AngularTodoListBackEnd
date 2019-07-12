import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';
import { Subscription } from 'rxjs';
import { TodolistService } from 'src/app/Services/todolist.service';

@Component({
  selector: 'app-toolist',
  templateUrl: './toolist.component.html',
  styleUrls: ['./toolist.component.scss']
})
export class ToolistComponent implements OnInit , OnDestroy {

  todos: Todo[] 
  todosSubscription: Subscription
  isDeleted: boolean = false;
  isCompleted: boolean = false;

  constructor(private todolistservice: TodolistService) { }

  ngOnInit() {
    this.todosSubscription = this.todolistservice.todoSubject.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    )
    this.todolistservice.getTodos();
    this.todolistservice.emitTodoSubject()
  }

  onDeleteTodo(todo: Todo) {
    this.todolistservice.removeTodo(todo);
    this.isDeleted = true;
   
  }

  onCompleteTodo(todo: Todo) {
    this.todolistservice.removeTodo(todo);
    this.isCompleted = true;
  }

  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }

}
