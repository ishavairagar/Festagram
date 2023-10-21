import { Injectable } from '@angular/core';
import { UserVM } from '../shared/models/user-vm';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  addTeacher(teacherVM: UserVM) {
    throw new Error('Method not implemented.');
  }
  updateEvent(teacherVM: UserVM) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
