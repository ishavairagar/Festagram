import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{ path: 'dashboard', component: DashboardComponent },
{
  path: 'student',
  loadChildren: () =>
    import('../student/student.module').then((m) => m.StudentModule),
},
{
  path: 'teacher',
  loadChildren: () =>
    import('../teacher/teacher.module').then((m) => m.TeacherModule),
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
