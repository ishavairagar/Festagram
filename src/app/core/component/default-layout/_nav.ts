import { INavData } from '@coreui/angular';



var adminMenu = [
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
    url: 'admin/event',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'Guest',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
  },
];

var teacherMenu=[
  {
    name: 'Dashboard',
    url: '/teacher/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Student',
    url: '/teacher/student',
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Event',
    url: '/teacher/event',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'Guest',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
  },
];

  
var studentMenu=[
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Event',
    url: '/admin/event',
    iconComponent: { name: 'cil-puzzle' },
  }
];
var eventMenu=[
  {
    name: 'Dashboard',
    url: '/admin/event',
    iconComponent: {name: 'cil-puzzle'},
  }
]
export const navItems: INavData[] = teacherMenu;


