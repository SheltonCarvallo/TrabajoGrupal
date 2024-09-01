import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { ComponenteComponent } from './componente/componente.component';
import { LoginComponent } from './componente/subcomponente/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponenteComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    FormsModule
  ]
})
export class AutenticacionModule { }
