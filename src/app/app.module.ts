import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataManagerService } from './data-manager.service';
import { Post } from './model/post.model';
import { PostRepository } from './model/post.repository';
import { PostsComponent } from './posts/posts.component';
//import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { FeedBackComponent } from './feed-back/feed-back.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentComponent,
    FeedBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Post, PostRepository, DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
