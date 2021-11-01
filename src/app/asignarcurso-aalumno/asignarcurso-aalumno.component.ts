import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-asignarcurso-aalumno',
  templateUrl: './asignarcurso-aalumno.component.html',
  styleUrls: ['./asignarcurso-aalumno.component.css']
})
export class AsignarcursoAalumnoComponent implements OnInit {
  cursos: any = [];
  cargar: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.buscarProfesores();
  }

  buscarProfesores() {
    this.cargar = true;
    this.buscarProfesoresServicio().subscribe((response: any) =>
      this.mostrarProfesores(response)
    );
  }

  mostrarProfesores(response: any) {
    this.cargar = false;
    this.cursos = response;
  }

  buscarProfesoresServicio(): Observable<any> {
    return this.http
      .get<any>('http://localhost:3030/curso/buscar')
      .pipe(catchError((e) => 'error'));
  }
  asignar(curso: any) {
      localStorage.setItem("idcurso",JSON.stringify(curso.idcurso));
      console.log(localStorage.getItem("idcurso"));
      localStorage.setItem("nombrecurso",(curso.nombre));
      console.log(localStorage.getItem("nombrecurso"));
      location.href="/asignarcursoalumno";
  }



}
