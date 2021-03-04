import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContComponent } from './create-cont/create-cont.component';
import { ShowContComponent } from './show-cont/show-cont.component';

const routes: Routes = [
  {
    path:'',
    component:CreateContComponent
  },
  // {
  //   path: '',
  //   component: ShowContComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
