import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    TeacherComponent,
    DashboardComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ]
})
export class TeacherModule { }
