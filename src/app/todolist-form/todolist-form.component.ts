import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodolistService } from '../Services/todolist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Todo } from '../models/todo.models'

@Component({
  selector: 'app-todolist-form',
  templateUrl: './todolist-form.component.html',
  styleUrls: ['./todolist-form.component.scss']
})
export class TodolistFormComponent implements OnInit {

  TodoForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private todolistService: TodolistService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.TodoForm = this.formBuilder.group({
     title : ['' , Validators.required],
     task: ['', Validators.required]
    })
  }

  onSaveTodo() {
    const title = this.TodoForm.get('title').value;
    const task = this.TodoForm.get('task').value;
    const newDate = Date.now()
    

    const newTodo = new Todo(title,task,newDate);
    this.todolistService.createNewTodo(newTodo);
    this.router.navigate(['/todoList'])
  }


}
