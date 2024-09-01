import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesPersonaComponent } from './componentes/componentespersona.component';

const routes: Routes = [
  {path:'', component: ComponentesPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
