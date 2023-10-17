import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/component/main-layout/main-layout.component';
import { DefaultLayoutComponent } from './core/component/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    data: {
      title: 'Login',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./account/account.module').then((mod) => mod.AccountModule),
      },
    ],
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: '',
    },
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./student/student.module').then((m) => m.StudentModule),
      },
      {
        path: 'teacher',
        loadChildren: () =>
          import('./teacher/teacher.module').then((m) => m.TeacherModule),
      },
      // {
      //   path: 'reset-password',
      //   component:resetpasswordcomponent
      // },
      // {
      //   path: 'profile',
      //   component:resetpasswordcomponent
      // },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
