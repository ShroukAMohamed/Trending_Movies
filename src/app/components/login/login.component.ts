import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public AuthService:AuthService, public Router:Router){}
  loginForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(`^[A-Za-z0-9]{6,15}$`)]),
  })

  submitLoginForm(loginForm:FormGroup){
    console.log(loginForm.value.email)
    // this.AuthService.saveData()
    if(loginForm.valid){
      this.AuthService.login(loginForm.value.email,loginForm.value.password)
    }
  }
}
