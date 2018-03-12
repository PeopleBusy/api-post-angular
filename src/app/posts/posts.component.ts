import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(private postsService : PostsService, private router :Router) { }

  ngOnInit() {

    this.postsService.getPosts()
      .subscribe((response : any) => {
          this.posts = response.result;
        },
        (error : HttpErrorResponse) => {
          console.log(error);
          this.router.navigateByUrl("/login");
        });

  }

}
