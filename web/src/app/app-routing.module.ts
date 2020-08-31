import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/pages/home/home.component';
import { UpdateComponent } from './views/components/update/update.component';
import { DeleteComponent } from './views/components/delete/delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
