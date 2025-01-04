import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  username:any;
  password:any;
  adminPage:string = 'admin'
  constructor(private router: Router) { }

  ngOnInit() {
  }

  adminLogin() {
    if(this.username == 'satyasri@ira' && this.password == 'iraadminlogin/satya') {
      this.router.navigateByUrl("/"+this.adminPage)
    }
  }
}
