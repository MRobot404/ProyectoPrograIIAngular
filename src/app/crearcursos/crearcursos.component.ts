import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-crearcursos',
  templateUrl: './crearcursos.component.html',
  styleUrls: ['./crearcursos.component.css']
})
export class CrearcursosComponent implements OnInit {
  cargar: boolean = false;
  curso: any = {};
  profesores: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarProfesores();
  }
  guardar() {
    let formulario: any = document.getElementById('formulario');
    if (formulario.reportValidity()) {
      this.cargar = true;
      this.servicioGuardar().subscribe(
        (response:any) => this.resultadoServicio(response)
      )
    }
  }

  resultadoServicio(res:any){
    this.cargar=false;
    this.curso= {};
    alert("Curso guardado con el Id"+res.idcurso)
  }
  servicioGuardar() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(
        'http://localhost:3030/curso/guardar',
        this.curso,httpOptions
      )
      .pipe(catchError((e) => 'error'));
  }
  buscarProfesores() {
    this.cargar = true;
    this.buscarProfesoresServicio().subscribe(
      (response: any) => this.mostrarProfesores(response)
    )
  }



  buscarProfesoresServicio(): Observable<any> {
    return this.http.get<any>("http://localhost:3030/profesor/buscar").pipe(
      catchError(e => "error")
    )
  }
  mostrarProfesores(response: any) {
    this.cargar = false;
    this.profesores = response;
  }
  

}
