import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/actions'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor( private formBuilder: FormBuilder, private store:Store){ }

  ngOnInit(): void { }

  submit(){ 
    this.store.dispatch(registerAction(this.registerForm.value))    
  }

}
