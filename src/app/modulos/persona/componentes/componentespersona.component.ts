import { Component, ViewChild } from '@angular/core';
import { DatospersonaComponent } from './subcomponentes/datospersona/datospersona.component';
import { lPersona } from '../../../Interfaz/persona.interfaz';
import { personas } from '../../../dataejemplo/datapersona';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentespersona.component.html',
  styles: ``
})
export class ComponentesPersonaComponent {

  @ViewChild(DatospersonaComponent, {static: false})
  datosPersonaComponent!: DatospersonaComponent;

  mantenimientoUsuario(){
    this.datosPersonaComponent.guardarDatosPersonales();
  }

  guardarPersona(persona: lPersona) {
    personas.push(persona);
  }
}
