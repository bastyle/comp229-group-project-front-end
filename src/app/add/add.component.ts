import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../model/post.model';
import { PostRepository } from '../model/post.repository';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private repository: PostRepository, private route: ActivatedRoute, private dataManager: DataManagerService,private router: Router) { }

  id: Number;
  addPost = new Post();

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.addPost.title = form.value.title;
    this.addPost.publisher = form.value.publisher;
    this.addPost.content = form.value.content;
    console.log(this.addPost._id);
    this.createPost(this.addPost);
    this.router.navigate(["/posts"]);
  }
  

  createPost(addedPost: Post){
      this.dataManager.savePost(addedPost).subscribe((addedPost) => {
        console.log("Created Successfully!");
      })
    }

}
