import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ToolistComponent } from './todo/toolist/toolist.component';
import { TodolistFormComponent } from './todolist-form/todolist-form.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthService } from './Services/auth.service';
import { TodolistService } from './Services/todolist.service';
import { Routes , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


const appRoutes : Routes = [
  {path: 'auth/signin' , component: SigninComponent},
  {path: 'auth/signup' , component: SignupComponent},
  {path: 'todoList' , component : ToolistComponent},
  {path: 'todoList/new' , component: TodolistFormComponent},
  {path: '**' , redirectTo: 'todolist'} ,
  {path: '' , redirectTo: 'todolist' , pathMatch: 'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ToolistComponent,
    TodolistFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuardService,
    AuthService,
    TodolistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
