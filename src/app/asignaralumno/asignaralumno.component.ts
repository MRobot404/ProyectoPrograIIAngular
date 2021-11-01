import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-asignaralumno',
  templateUrl: './asignaralumno.component.html',
  styleUrls: ['./asignaralumno.component.css']
})
export class AsignaralumnoComponent implements OnInit {

  cargar: boolean = false;
  nota: any = {};
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    let temporal: any = localStorage.getItem('idalumno');
    if(temporal){
      console.log(temporal)
      this.nota.alumnoIdalumno = JSON.parse(temporal);
      console.log(this.nota.alumnoIdalumno)
    }
    let id: any=localStorage.getItem("idcurso");
    this.nota.cursoIdcurso=JSON.parse(id);
    let nombre=localStorage.getItem("nombrecurso");
    this.nota.nombreCurso=nombre;
    console.log(nombre);
   
  }

  guardar() {
    let formulario: any = document.getElementById('formulario');
    if (formulario.reportValidity()) {
      this.cargar = true;
      this.servicioGuardar().subscribe(
        (response: any) => this.resultadoServicio(response)
      )
    }
  }

  resultadoServicio(res: any) {
    this.cargar = false;
    this.nota = {};
    alert("Asignación exitosa con el Id " + res.idnota)
   
  }
  servicioGuardar() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(
        'http://localhost:3030/nota/guardar',
        this.nota, httpOptions
      )
      .pipe(catchError((e) => 'error'));
  }

}
