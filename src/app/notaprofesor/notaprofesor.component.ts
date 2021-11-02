import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-notaprofesor',
  templateUrl: './notaprofesor.component.html',
  styleUrls: ['./notaprofesor.component.css']
})
export class NotaprofesorComponent implements OnInit {
  cargar: boolean = false;
  nota: any = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let id: any=localStorage.getItem("notatemporal");
    this.nota=JSON.parse(id);
    console.log(localStorage.getItem("notatemporal"))
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
    this.nota= {};
    alert("Alumno guardado con el Id "+res.idnota)
    location.href="/notafinal"
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
        this.nota,httpOptions
      )
      .pipe(catchError((e) => 'error'));
  } 

}
