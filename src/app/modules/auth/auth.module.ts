import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {RouterModule} from '@angular/router';
import {LoginComponent} from '@app/modules/auth/login/login.component';
import {RegisterComponent} from '@app/modules/auth/register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
