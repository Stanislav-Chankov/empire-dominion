import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, RouterModule],
  declarations: [LoginComponent]
})
export class AuthModule {}


