import { Component, ViewChild } from '@angular/core';
import { DatospersonaComponent } from './subcomponentes/datospersona/datospersona.component';

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
}
