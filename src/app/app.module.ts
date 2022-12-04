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
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentComponent,
    FeedBackComponent,
    PostsDetailsComponent,
    AddComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Post, PostRepository, DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
