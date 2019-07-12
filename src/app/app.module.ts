import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,LOCALE_ID } from '@angular/core';

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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');


const appRoutes : Routes = [
  {path: 'auth/signin' , component: SigninComponent},
  {path: 'auth/signup' , component: SignupComponent},
  {path: 'todoList' , component : ToolistComponent},
  {path: 'todoList/new' , component: TodolistFormComponent},
  {path: '**' , redirectTo: 'todoList'} ,
  {path: '' , redirectTo: 'todoList' , pathMatch: 'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ToolistComponent,
    TodolistFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuardService,
    AuthService,
    TodolistService,
    {provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
