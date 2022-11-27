import { Component, OnInit } from '@angular/core';
import { PostRepository } from './../model/post.repository';
import { Router } from '@angular/router';
import { Post } from '../model/post.model';
import { NgForm } from '@angular/forms';

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

  test= true;

  editObj = new Post();

 Submit = new Post();

  onSubmit(f:NgForm) {
    this.Submit.title= f.value.id;
    this.Submit.publisher= f.value.title;
    this.Submit.content= f.value.content;
    this.repository.savepost(this.Submit);
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
