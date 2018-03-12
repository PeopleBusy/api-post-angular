import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;

  mode : number = 0;

  constructor(private fb: FormBuilder, private loginService : LoginService, private router : Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required ], // <--- the FormControl called "name"
      password: ['', Validators.required ]
    });
  }

  onLogin(user){
    this.loginService.login(user)
      .subscribe((response : any) => {
          this.mode = 0;
          let jwt = response.token;
          this.loginService.saveToken(jwt);
          this.router.navigateByUrl("/posts");
        },
        (error : HttpErrorResponse) => {
          this.mode = 1;
        }
      )
  }

}
