import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  
  todos : Todo[] = []
  todoSubject = new Subject<Todo[]>()



  constructor() { }

  emitTodoSubject() {
    this.todoSubject.next(this.todos);
  }

  saveTodos() {
    firebase.database().ref('/todoList').set(this.todos)
  }

  getTodos() {
    firebase.database().ref('/todoList')
    .on('value' , (data) => {
      this.todos = data.val() ? data.val() : [];
      this.emitTodoSubject();
    })
  }

  createNewTodo(newTodo : Todo) {
    this.todos.push(newTodo)
    this.saveTodos()
    this.emitTodoSubject();
  }

  removeTodo(todo: Todo) {
    const todoIndexToRemove = this.todos.findIndex(
      (todoEl) => {
        if(todoEl === todo) {
          return true;
        }
      }
    )
    this.todos.splice(todoIndexToRemove,1);
    this.saveTodos();
    this.emitTodoSubject();
  }



}
