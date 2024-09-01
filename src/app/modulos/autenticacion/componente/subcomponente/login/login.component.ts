import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  @Output()
  banderaAutenticacion = new EventEmitter<string>(); //banderaAutenticacion is an instance of the EventEmitter Class

  @Output()
  loginEventChild = new EventEmitter();

  labelLogin: string = "Login";
  emailUsuario: string = '';
  passWordUsuario: string = '';

  mostrarNombre(): void {
    // this.nombreUsuario = "Ejemplo";
    console.log({ 'usuario': this.emailUsuario, 'pass': this.passWordUsuario });
  }


  login(){
    this.loginEventChild.emit();
  }
}
