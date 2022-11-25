import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { DataManagerService } from '../data-manager.service';


@Injectable()
export class PostRepository {
  private posts: Post[];
  private loaded = false;

  constructor(private dataSource: DataManagerService) {}

  loadPosts(): void {
    this.loaded = true;
    this.dataSource.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  getPosts(): Post[] {
    if (!this.loaded)  {
      this.loadPosts();
    }
    return this.posts;
  }

  savepost(post: Post): Observable<Post> {
    return this.dataSource.savePost(post);
  }

}
