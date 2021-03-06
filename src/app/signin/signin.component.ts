import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  cargar: boolean = false;
  profesor: any = { cursolist: [] };
  numero: any = 0;
  contador: boolean=false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

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
    this.profesor= {cursolist:[]};
    alert("Profesor Guardado con el Id"+res.idProfesor)
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

  agregarCurso(numero:any) {
    this.profesor.cursolist.push({});
    this.numero++;
    console.log(this.numero);
    if(this.numero>2){
     ( <HTMLInputElement>document.getElementById("btn")).disabled=true;
    }
  }

  eliminar(curso: any) {
    this.profesor.cursolist.splice(this.profesor.cursolist.indexOf(curso), 1);
  }
}
