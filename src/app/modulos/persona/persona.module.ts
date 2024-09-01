import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { DatospersonaComponent } from './componentes/subcomponentes/datospersona/datospersona.component';
import { FormsModule } from '@angular/forms';
import { ComponentesPersonaComponent } from './componentes/componentespersona.component';
import { ModalpersonaComponent } from './componentes/subcomponentes/modalpersona/modalpersona.component';


@NgModule({
  declarations: [
    ComponentesPersonaComponent,
    DatospersonaComponent,
    ModalpersonaComponent
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
