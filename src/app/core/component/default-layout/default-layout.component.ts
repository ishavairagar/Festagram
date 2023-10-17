import { Component } from '@angular/core';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {

  public navItems = navItems;
   adminMenu = [
    {
      name: 'Dashboard',
      url: '/admin/dashboard',
      iconComponent: { name: 'cil-speedometer' },
    },
    {
      name: 'Teacher',
      url: 'admin/teacher',
      iconComponent: { name: 'cil-user' }
    },
    {
      name: 'Student',
      url: 'admin/student',
      iconComponent: { name: 'cil-pencil' }
    },
    {
      name: 'Event',
      url: '/base',
      iconComponent: { name: 'cil-puzzle' },
    },
    {
      name: 'Guest',
      url: '/base',
      iconComponent: { name: 'cil-puzzle' },
    },
  ];
  
   teacherMenu=[
    {
      name: 'Dashboard',
      url: '/teacher/dashboard',
      iconComponent: { name: 'cil-speedometer' },
    },
    {
      name: 'Student',
      url: 'teacher/student',
      iconComponent: { name: 'cil-pencil' }
    },
    {
      name: 'Event',
      url: '/base',
      iconComponent: { name: 'cil-puzzle' },
    },
    {
      name: 'Guest',
      url: '/base',
      iconComponent: { name: 'cil-puzzle' },
    },
  ];
  
    
   studentMenu=[
    {
      name: 'Dashboard',
      url: '/admin/dashboard',
      iconComponent: { name: 'cil-speedometer' },
    },
    {
      name: 'Event',
      url: '/base',
      iconComponent: { name: 'cil-puzzle' },
    }
  ];

  constructor(){
    debugger
    var role = sessionStorage.getItem('currentUser');
    if(role=='admin'){
      this.navItems = this.adminMenu;
    } else if(role=='teacher'){
      this.navItems = this.teacherMenu;
    }else{
      this.navItems = this.studentMenu;
    }
  }
}
