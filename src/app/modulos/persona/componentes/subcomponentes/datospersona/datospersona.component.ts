import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-datospersona',
  templateUrl: './datospersona.component.html',
  styles: ``
})
export class DatospersonaComponent {

  @ViewChild(NgForm, {static: false}) formDatosPersonales!: NgForm;

  primer_Nombre: string = '';
  
  guardarDatosComponenets(){

  } 
  guardarDatosPersonales(){
   this.validar(this.formDatosPersonales);   
  }

  validar(formDatosPersonales: NgForm){
    if(formDatosPersonales.valid){
      console.log('Se ha ingresado los datos personales satisfactoriamente')
    }
    else{
      alert('Error en los datos del formulario')
    }
  }
}
