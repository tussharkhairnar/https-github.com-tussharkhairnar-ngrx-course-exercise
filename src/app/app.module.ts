import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule} from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AuthModule,
    RouterModule,
    StoreModule.forRoot({})
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
