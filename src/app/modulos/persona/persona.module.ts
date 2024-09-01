import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { DatospersonaComponent } from './componentes/subcomponentes/datospersona/datospersona.component';
import { FormsModule } from '@angular/forms';
import { ComponentesPersonaComponent } from './componentes/componentespersona.component';


@NgModule({
  declarations: [
    ComponentesPersonaComponent,
    DatospersonaComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    FormsModule
  ],
  exports: [
    ComponentesPersonaComponent
  ]
})
export class PersonaModule { }
