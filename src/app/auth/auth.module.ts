import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.routing.module';

import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers'
import { RegisterEffect } from './store/effect'
import { AuthService } from './services/auth.service'
import { EffectsModule } from '@ngrx/effects';
import {BackendErrorsModule} from 'src/app/shared/modules/backend.errors/backend.errors.module'
import {PersistanceService} from 'src/app/shared/services/persistance.service'

@NgModule({
  declarations: [ RegisterComponent ],
  exports: [ RegisterComponent ],
  providers: [ AuthService,RegisterEffect, PersistanceService  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    BackendErrorsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect])
  ]
})
export class AuthModule { }

