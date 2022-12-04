import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  { path: 'post/:postId', component: PostsDetailsComponent},
  { path: 'post', component:AddComponent},
  { path: 'posts', component:PostsComponent},
  //{ path: 'post/form', component: PostsDetailsComponent}
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
