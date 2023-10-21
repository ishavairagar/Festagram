import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login:any = {};

  constructor(private router:Router) { 
    this.login = {};
  }

  ngOnInit(): void {
  }

  loginUser(loginForm:NgForm){
    debugger
    if(loginForm.valid){
      if(this.login.email === 'admin123@gmail.com' && this.login.password === 'Admin@123'){
        sessionStorage.setItem('currentUser', 'admin');
        this.router.navigate(['/admin/dashboard']);
      }
    }
  }

}
