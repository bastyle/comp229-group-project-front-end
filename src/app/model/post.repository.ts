import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { DataManagerService } from '../data-manager.service';


@Injectable()
export class PostRepository {
  private posts: Post[];
  private loaded = false;

  constructor(private dataSource: DataManagerService) {
    this.dataSource.getPosts()
      .subscribe(data => {
        console.log("sub: posts:::" + JSON.stringify(data));
        this.posts = data
      });
  }

  loadPosts(): void {
    console.log("repo loadPosts");
    this.loaded = true;
    this.dataSource.getPosts()
      //.subscribe(posts => this.posts = posts);
      .subscribe(posts => {
        console.log("sub: posts.:" + JSON.stringify(posts));
        this.posts = posts
      });
  }

  getPosts(): Post[] {
    console.log("repo getPosts");
    /*if (!this.loaded) {
      this.loadPosts();
    }*/
    return this.posts;
  }

  savepost(post: Post): Observable<Post> {
    return this.dataSource.savePost(post);
  }

}
