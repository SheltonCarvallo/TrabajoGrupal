import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', 
    loadChildren:() => import('./modulos/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },
  {path: 'persona',
    loadChildren:() => import('./modulos/persona/persona.module').then(m => m.PersonaModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
