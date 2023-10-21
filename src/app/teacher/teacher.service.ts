import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserVM } from '../shared/models/user-vm';
var headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url : string = "http://localhost:3000/user";
  constructor(private http : HttpClient) { }

  getList(){
    return this.http.get<UserVM[]>(`${this.url}?isActive=true`);
  }

  getTeacher(id:string | null){
    return this.http.get<UserVM[]>(`${this.url}?id=${id}`);
  }

  addTeacher(teacher:UserVM){
    return this.http.post(this.url,teacher);
  }

  updateTeacher(teacher:UserVM){
    return this.http.put<UserVM>(this.url + '/' + teacher.id, teacher, headerOption);
  }

  deleteTeacher(teacher:UserVM){
    return this.http.put<UserVM>(this.url + '/' + teacher.id, teacher, headerOption);
  }
}
