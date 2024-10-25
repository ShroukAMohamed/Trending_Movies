import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm:FormGroup = new FormGroup({
    // first_name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(8)]),
    // last_name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(8)]),
    // age: new FormControl('',[Validators.required,Validators.min(5), Validators.max(80)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(`^[A-Za-z0-9]{6,15}$`)]),
  })

  constructor(public AuthService:AuthService, public Router:Router){}

  submitRegisterForm(registerForm:FormGroup){
    if(registerForm.valid){
      this.AuthService.register(registerForm.value.email,registerForm.value.password)
    }
  }
}
