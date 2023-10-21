import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { EventEnrollmentComponent } from './event-enrollment/event-enrollment.component';


@NgModule({
  declarations: [
    EventComponent,
    AddEditComponent,
    EventListComponent,
    EventDetailsComponent,
    EventDashboardComponent,
    EventEnrollmentComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
