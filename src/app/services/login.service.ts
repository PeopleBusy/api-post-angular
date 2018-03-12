import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginService {

  private host : string = "http://localhost:8000";

  constructor(private http : HttpClient) { }

  login(user){
    var data = "username=" + user.username + "&password=" + user.password;
    var reqHeader = new HttpHeaders({'Content-type' : 'application/x-www-form-urlencoded'});
    return this.http.post(this.host + "/api/login_check", data, { headers : reqHeader});
  }

  saveToken(jwt : string){
    localStorage.setItem('token', jwt);
  }

}
