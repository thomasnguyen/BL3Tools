import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeBuilderComponent } from './tree-builder/tree-builder.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tb/:char/:build', component: TreeBuilderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
