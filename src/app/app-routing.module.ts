import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [
  { path: 'post/:postId', component: PostsDetailsComponent},
  { path: 'post', component:AddComponent},
  { path: 'register_user', component: UserRegisterComponent}
  //{ path: 'post/form', component: PostsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
