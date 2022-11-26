import { Component, OnInit } from '@angular/core';
import { PostRepository } from './../model/post.repository';
import { Router } from '@angular/router';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private repository: PostRepository, private router: Router) { 
  }

  get posts(): Post[]{
    return this.repository.getPosts();
  }

  ngOnInit(): void {
  }

  
  deletePost(id: number):void{
    //console.log("delete:"+id);
    this.repository.deletePost(id);
  }

  click(){
    console.log("click");
  }

}
