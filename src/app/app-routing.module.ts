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
import { HomeprofesorComponent } from './homeprofesor/homeprofesor.component';
import { ConsultacursoprofesorComponent } from './consultacursoprofesor/consultacursoprofesor.component';
import { ConsultaralumnosComponent } from './consultaralumnos/consultaralumnos.component';
import { NotafinalComponent } from './notafinal/notafinal.component';
import { PerfilprofesorComponent } from './perfilprofesor/perfilprofesor.component';
import { ActualizarProfesorComponent } from './actualizar-profesor/actualizar-profesor.component';
import { ActualizaralumnoComponent } from './actualizaralumno/actualizaralumno.component';
import { ActualizarcursoComponent } from './actualizarcurso/actualizarcurso.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'mostrar', component:MostrarComponent},
  {path:'mostraralumno', component:MostrarprofesoresComponent},
  {path:'crearAlumno', component:CrearalumnosComponent},
  {path:'mostrarCurso', component:MostrarcursosComponent},
  {path:'crearCurso', component:CrearcursosComponent},
  {path:'profile',component:MiperfilComponent},
  {path:'menu', component:HomeprofesorComponent},
  {path:'consultacurso',component:ConsultacursoprofesorComponent},
  {path:'consultaalumno', component:ConsultaralumnosComponent},
  {path:'notafinal', component:NotafinalComponent},
  {path:'perfilprofe', component:PerfilprofesorComponent},
  {path:'actualizarprofesor', component:ActualizarProfesorComponent},
  {path:'actualizaralumno', component:ActualizaralumnoComponent},
  {path:'actualizarcurso', component:ActualizarcursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
