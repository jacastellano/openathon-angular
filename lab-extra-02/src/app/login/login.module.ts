import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';

/**
 * User Managment Module
 */
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LoginModule { }
