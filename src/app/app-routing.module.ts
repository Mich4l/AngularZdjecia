import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './controlers/post-form/post-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'posts', component: PostFormComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
