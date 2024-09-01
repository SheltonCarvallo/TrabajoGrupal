import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './subcomponente/login/login.component';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styles: ``
})
export class ComponenteComponent {
  constructor(private router: Router){
  }

  @ViewChild (LoginComponent, { static: false }) loginComponent!: LoginComponent;

  private mailUsuario: string = 'vmtdev@gmail.com';

  private passUsuario: string = '123456.';

  pantallaPresentacion: string = "Login";

  login(datosLogin: any)
  {
    if(this.loginComponent.emailUsuario === this.mailUsuario)
      {
        if(this.loginComponent.passWordUsuario == this.passUsuario)
        {
            this.router.navigate(['/persona'])
        }
        else{
          this.mostrarMensajeError("Contraseña incorrecta");
          // window.alert("Contraseña incorrecta");
        }
      }
      else{
        this.mostrarMensajeError("Usuario Incorrecto");
        // window.alert("Usuario Incorrecto");
      }
  }
  
  toggleAutentication(dataCambio: string) {
    console.log(dataCambio);
    this.pantallaPresentacion = dataCambio;
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


