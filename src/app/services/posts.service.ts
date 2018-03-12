import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PostsService {

  private host : string = "http://localhost:8000";

  private jwt = null;

  constructor(private http : HttpClient) { }

  loadToken(){
    this.jwt = localStorage.getItem('token');
  }

  getPosts(){
    if(this.jwt == null) this.loadToken();
    return this.http.get(this.host + "/api/posts", {headers : new HttpHeaders({'authorization' : "Bearer " + this.jwt})});
  }

}
