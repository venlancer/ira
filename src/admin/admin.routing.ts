import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreatePageComponent } from './create-page/create-page.component';

const routes: Routes = [
  { path: '', component: AdminComponent }, // Default route for the Admin module
  { path: 'create-page', component: CreatePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
