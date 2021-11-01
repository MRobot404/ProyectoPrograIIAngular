import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-actualizar-profesor',
  templateUrl: './actualizar-profesor.component.html',
  styleUrls: ['./actualizar-profesor.component.css']
})
export class ActualizarProfesorComponent implements OnInit {
  cargar: boolean = false;
  profesor: any = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let temporal: any = localStorage.getItem('prof');
      this.profesor =JSON.parse (temporal);
     console.log(this.profesor);
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
    this.profesor= {};
    alert("Profesor Guardado con el Id "+res.idProfesor)
  }
  servicioGuardar() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(
        'http://localhost:3030/profesor/guardar',
        this.profesor,httpOptions
      )
      .pipe(catchError((e) => 'error'));
  }

}
