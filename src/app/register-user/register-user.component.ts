import { Component } from '@angular/core';
import { RegisterUser } from '../models/user.models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  registerUser: RegisterUser = {
    userName: '',
    email: '',
    password: ''
  }

  constructor(private apiService: ApiService) { }

  onRegister(): any {
    this.apiService.postRegister(this.registerUser)
    .subscribe( (data: any) => { 
      console.log(data)
    }); 
  }

}
