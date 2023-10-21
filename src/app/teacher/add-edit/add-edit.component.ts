import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { UserVM } from 'src/app/shared/models/user-vm';
import { TeacherService } from '../teacher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  isUpdate: boolean = false;
  teacherVM: UserVM= new UserVM();
  currentURL: string='';
  constructor(private location: Location, private teacherService : TeacherService,private router: Router,private activatedRoute: ActivatedRoute) {
    this.teacherVM = new UserVM();
  }
  ngOnInit(): void {
    this.teacherVM = new UserVM();
    this.currentURL = this.router.url;
    this.isUpdate = this.currentURL.includes('edit') ? true : false;
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.isUpdate){
      this.getTeacher(id);
    }
  }

  getTeacher(id:string | null) {
    this.teacherService.getTeacher(id).subscribe((res:UserVM[]) => {
      if (res) {
        debugger
        this.teacherVM = res[0];
      }
    });
  }


  submitTeacherDetails(teacherDetailsForm: NgForm) {
    if(teacherDetailsForm.valid){
      this.teacherVM.role='teacher';
      this.teacherService.addTeacher(this.teacherVM).subscribe((res) => {
        if (res) {
          alert('Teacher added sucessfully');
      this.router.navigate(['/admin/teacher/dashboard']);
        }
      });
      
    }
    
  }
  updateTeacherDetails(teacherDetailsForm: NgForm) {
    if (teacherDetailsForm.valid) {
      this.teacherVM.role='teacher';
      this.teacherService.updateTeacher(this.teacherVM).subscribe((res) => {
        if (res) {
          alert('Teacher updated sucessfully');
          this.router.navigate(['/dashboard']);
        }
      })
    }
  }
  goBack() {
    this.location.back();
  }
  reset(teacherDetailsForm: NgForm) {
    teacherDetailsForm.resetForm();
  }
}
