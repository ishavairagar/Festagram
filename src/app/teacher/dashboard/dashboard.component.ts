import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { UserVM } from '../../shared/models/user-vm';
import { Router } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  teacherList: UserVM[] = new Array<UserVM>();
  teacher:UserVM = new UserVM();
  modalRef: BsModalRef = new BsModalRef();

  constructor(private router: Router,private teacherService : TeacherService, private modalService: BsModalService,){
    this.teacherList=[]
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.teacherService.getList().subscribe((res:UserVM[]) => {
      if (res) {
        this.teacherList = res;
      }
    })
  }

  editTeacher(id: string) {
    debugger
    this.router.navigate([`/admin/teacher/edit/${id}`]);
  }

  deleteTeacher(template: any, item: UserVM) {
    this.teacher = item;
    this.modalRef = this.modalService.show(template, {
      class: "modal-md",
      backdrop: "static",
    });
  }


  confirmDeleteTeacher(){
    this.teacher.isActive=false;
    this.teacherService.deleteTeacher(this.teacher).subscribe(
      (res) => {
        if (res) {
          this.getList();
          this.modalRef.hide();
        }
      });
  }
}
