import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollComponent } from './scroll/scroll.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';

const routes: Routes = [
  {
    path: 'scroll',
    pathMatch: 'full',
    component: ScrollComponent,
  },
  {
    path: 'drag-drop',
    pathMatch: 'full',
    component: DragdropComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: ScrollComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
