import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SigninComponent } from './signin/signin.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ActualizarcursoComponent } from './actualizarcurso/actualizarcurso.component';
import { ActualizaralumnoComponent } from './actualizaralumno/actualizaralumno.component';
import { AsignaralumnoComponent } from './asignaralumno/asignaralumno.component';
import { AsignarcursoAalumnoComponent } from './asignarcurso-aalumno/asignarcurso-aalumno.component';
import { NotaprofesorComponent } from './notaprofesor/notaprofesor.component';
import { ConsultaralumnosverComponent } from './consultaralumnosver/consultaralumnosver.component';
import { ConsultaralumnosdetalleComponent } from './consultaralumnosdetalle/consultaralumnosdetalle.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SigninComponent,
    MostrarComponent,
    MostrarprofesoresComponent,
    CrearalumnosComponent,
    MostrarcursosComponent,
    CrearcursosComponent,
    MiperfilComponent,
    HomeprofesorComponent,
    ConsultacursoprofesorComponent,
    ConsultaralumnosComponent,
    NotafinalComponent,
    PerfilprofesorComponent,
    ActualizarProfesorComponent,
    ActualizarcursoComponent,
    ActualizaralumnoComponent,
    AsignaralumnoComponent,
    AsignarcursoAalumnoComponent,
    NotaprofesorComponent,
    ConsultaralumnosverComponent,
    ConsultaralumnosdetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
