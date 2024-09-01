import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { lPersona } from '../../../../../Interfaz/persona.interfaz';
import { Modal } from 'bootstrap';
import { personas } from '../../../../../dataejemplo/datapersona';

@Component({
  selector: 'app-modalpersona',
  templateUrl: './modalpersona.component.html',
  styles: ``
})
export class ModalpersonaComponent {

  @Input()
  modalid: string = 'modalejemplo';
  
  @Input()
  dataPersona: lPersona = {
    nombre: '',
    apellido: '',
    edad: 0,
    numeroIdentificacion: 0,
    numeroCelular: '',
    correo: '',
    id: 0
  }

  @Output() eventoGuardar = new EventEmitter<lPersona>();

  @ViewChild(Modal, {static: true}) divModal!: Modal;

  guardar() {
    if (!this.validarGuardar()) {
      this.eventoGuardar.emit(this.dataPersona);
      this.dataPersona.id = personas.length;
      this.cerrarModal();
    }
  }

  cerrarModal() {
    let btnCerrar = document.getElementById('btnCerrarModal');
    if(btnCerrar){
      btnCerrar?.click();
    }
  }

  validarGuardar(): boolean {
    if (this.validarEstaVacio(this.dataPersona.nombre)) {
      this.mostrarMensajeError("El valor de nombre no se ha agregado");
      return true;
    }

    if (this.validarEstaVacio(this.dataPersona.apellido)) {
      this.mostrarMensajeError("El valor de apellidos no se ha agregado");
      return true;
    }

    if (this.validarEstaVacio(this.dataPersona.edad)) {
      this.mostrarMensajeError("El valor de Edad no se ha agregado");
      return true;
    }

    if (this.validarEstaVacio(this.dataPersona.numeroIdentificacion)) {
      this.mostrarMensajeError("El valor de Edad no se ha agregado");
      return true;
    }

    if (this.validarEstaVacio(this.dataPersona.numeroCelular)) {
      this.dataPersona.numeroCelular = 'No tiene Numero'
      return false;
    }

    if (this.validarEstaVacio(this.dataPersona.correo)) {
      this.mostrarMensajeError("El valor de Edad no se ha agregado");
      return true;
    }
    return false;

  }

  validarEstaVacio(value: any) {
    return value.lenght == 0 || value === '' || value === undefined || value == null;
  }

  mostrarMensajeError(message: string) {
    this.mostrarMensajeBase(message, 'danger');
  }

  mostrarMensajeExito(message: string) {
    this.mostrarMensajeBase(message, 'success');
  }

  mostrarMensajeAlerta(message: string) {
    this.mostrarMensajeBase(message, 'warn');
  }

  mostrarMensajeBase(message: string, type: string) {
    const alertPlaceholder = document.getElementById('divMensaje')
    const appendAlert = () => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')

      alertPlaceholder?.appendChild(wrapper)
    }
    appendAlert()
  }
}
