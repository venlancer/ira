import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin.routing';
import { CustomTblComponent } from './custom-tbl/custom-tbl.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePageComponent } from './create-page/create-page.component';



@NgModule({
  declarations: [
    AdminComponent,
    CustomTblComponent,
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
