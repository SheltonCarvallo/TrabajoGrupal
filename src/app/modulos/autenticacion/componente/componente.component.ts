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
          window.alert("Contraseña incorrecta");
        }
      }
      else{
        window.alert("Usuario Incorrecto");
      }
  }
  
  toggleAutentication(dataCambio: string) {
    console.log(dataCambio);
    this.pantallaPresentacion = dataCambio;
  }
}
