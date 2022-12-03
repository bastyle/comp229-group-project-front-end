import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsDetailsComponent } from './posts-details/posts-details.component';

const routes: Routes = [
  { path: 'post/:postId', component: PostsDetailsComponent},
  //{ path: 'post/form', component: PostsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
