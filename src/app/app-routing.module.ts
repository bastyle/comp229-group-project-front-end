import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { PostsComponent } from './posts/posts.component';
import { GuardAuthServiceService } from './guard-auth-service.service';
import { ShowPostComponent } from './show-post/show-post.component';


const routes: Routes = [
  { path: 'post/:postId', component: PostsDetailsComponent, canActivate: [GuardAuthServiceService]},
  { path: 'post', component:AddComponent, canActivate: [GuardAuthServiceService]},
  { path: 'register_user', component: UserRegisterComponent},
  { path: 'posts', component:PostsComponent, canActivate: [GuardAuthServiceService]},
  { path: 'show_post/:postId', component:ShowPostComponent, canActivate: [GuardAuthServiceService]},
  //{ path: 'post/form', component: PostsDetailsComponent}
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
