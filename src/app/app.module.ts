import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './utils/routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {LoginService} from './services/login.service';
import {RegisterService} from './services/register.service';
import {PostsService} from './services/posts.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule
  ],
  providers: [LoginService, RegisterService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
