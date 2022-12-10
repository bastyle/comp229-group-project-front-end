import { Component, OnInit } from '@angular/core';
import { PostRepository } from './../model/post.repository';
import { Router } from '@angular/router';
import { Post } from '../model/post.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private repository: PostRepository, private router: Router, private auth: AuthService) {
  }

  get posts(): Post[] {
    return this.repository.getPosts();
  }

  currentUser;

  test = true;

  editObj = new Post();

  Submit = new Post();

  onSubmit(f: NgForm) {
    this.Submit.title = f.value.id;
    this.Submit.publisher = f.value.title;
    this.Submit.content = f.value.content;
    this.repository.savepost(this.Submit);
  }

  ngOnInit(): void {
    this.currentUser = this.auth.getUser().username;
  }


  deletePost(id: number): void {
    //console.log("delete:"+id);
    this.repository.deletePost(id);
  }

  click() {
    console.log("click");
  }

  

}
