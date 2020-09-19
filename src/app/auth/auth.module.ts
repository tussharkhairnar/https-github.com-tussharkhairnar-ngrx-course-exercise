import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.routing.module';

import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers' 
import {AuthService } from './services/auth.service'


@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers:[AuthService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers )
  ]
})
export class AuthModule { }
