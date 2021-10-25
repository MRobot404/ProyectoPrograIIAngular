import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import {MostrarComponent} from './mostrar/mostrar.component';
import { MostrarprofesoresComponent } from './mostrarprofesores/mostrarprofesores.component';
import { CrearalumnosComponent } from './crearalumnos/crearalumnos.component';
import { MostrarcursosComponent } from './mostrarcursos/mostrarcursos.component';
import { CrearcursosComponent } from './crearcursos/crearcursos.component';
import { MiperfilComponent } from './miperfil/miperfil.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'mostrar', component:MostrarComponent},
  {path:'mostraralumno', component:MostrarprofesoresComponent},
  {path:'crearAlumno', component:CrearalumnosComponent},
  {path:'mostrarCurso', component:MostrarcursosComponent},
  {path:'crearCurso', component:CrearcursosComponent},
  {path:'profile',component:MiperfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
