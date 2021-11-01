import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-actualizaralumno',
  templateUrl: './actualizaralumno.component.html',
  styleUrls: ['./actualizaralumno.component.css']
})
export class ActualizaralumnoComponent implements OnInit {
  cargar: boolean = false;
  alumno: any = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let temporal: any = localStorage.getItem('alumno');
    this.alumno = JSON.parse(temporal);
    console.log(this.alumno);
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
    this.alumno = {};
    alert("Alumno Guardado con el Id " + res.idalumno)
  }
  servicioGuardar() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(
        'http://localhost:3030/alumno/guardar',
        this.alumno, httpOptions
      )
      .pipe(catchError((e) => 'error'));
  }

}
