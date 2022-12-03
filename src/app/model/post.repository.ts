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
        this.posts = data
      });
    
    this.dataSource.refreshRequired.subscribe(res => {
      this.loadPosts();
      this.getPosts();
    })
  }

  loadPosts(): void {
    this.loaded = true;
    this.dataSource.getPosts()
      .subscribe(posts => {
        this.posts = posts
      });
  }

  getPosts(): Post[] {
    return this.posts;
  }

  savepost(post: Post): Observable<Post> {
    return this.dataSource.savePost(post);
  }

  deletePost(id: number): void {
    this.dataSource.deletePost(id)
        .subscribe(data => {
          this.loadPosts();
        });
  }

}
