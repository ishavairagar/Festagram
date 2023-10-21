import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [{ path: '', component: TeacherComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'add', component: AddEditComponent },
{ path: 'edit/:id', component: AddEditComponent },
{
  path: 'student',
  loadChildren: () =>
    import('../student/student.module').then((m) => m.StudentModule),
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
