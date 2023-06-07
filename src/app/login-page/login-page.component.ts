import { Component } from '@angular/core';
import { LoginUser } from '../models/user.models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginCredentials: LoginUser = {
    email: '',
    password: ''
  }

  constructor(private apiService: ApiService) { }

  onLogin(): any { console.log("hello world");
  
    this.apiService.postLogin(this.loginCredentials)
    .subscribe( (data: any) => { 
     localStorage.setItem("JWTtoken", data.message) 
    //  console.log(data.message);
    } ) 
  }
}
