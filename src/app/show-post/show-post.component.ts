import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../model/post.model';
import { PostRepository } from '../model/post.repository';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(private repository: PostRepository, private route: ActivatedRoute, private dataManager: DataManagerService, private router: Router) { }

  id: Number;
  editPost = new Post();
  comment;

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('postId');
    // console.log(this.id);
    this.getEditPost();
  }

  onSubmit(form: NgForm) {
    /*this.editPost.title = form.value.title;
    this.editPost.publisher = form.value.publisher;
    this.editPost.content = form.value.content;
    */
    console.log(this.editPost._id);
    // add comment
    this.addComment(this.comment);

    
  }

  getEditPost() {
    this.route.params.subscribe((params) => {
      if (params['postId']) {
        this.dataManager.getPost(params['postId']).subscribe((post) => {
          this.editPost._id = post._id;
          this.id = post._id;
          this.editPost.title = post.title;
          this.editPost.publisher = post.publisher;
          this.editPost.content = post.content;
          this.editPost.created = post.created;
        });
      }
    })
  }

  addComment(editedPost: Post) {
    this.dataManager.editPost(editedPost).subscribe((editedPost) => {
      //console.log("Updated Successfully!");
      //TODO add modal message
      this.openPopup("Comment added successfully!");
      //this.router.navigate(["/posts"]);
    })
  }

  displayStyle = "none";
  popUpMessage = "";


  openPopup(message) {
    this.displayStyle = "block";
    this.popUpMessage = message;

  }
  closePopup() {
    this.displayStyle = "none";
    this.router.navigate(["/posts"]);
  }

}
