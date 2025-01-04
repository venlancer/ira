import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin.routing';
import { CustomTblComponent } from './custom-tbl/custom-tbl.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    CustomTblComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
