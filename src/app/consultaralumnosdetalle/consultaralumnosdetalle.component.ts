import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-consultaralumnosdetalle',
  templateUrl: './consultaralumnosdetalle.component.html',
  styleUrls: ['./consultaralumnosdetalle.component.css']
})
export class ConsultaralumnosdetalleComponent implements OnInit {
  alumnos: any = [];
  alumno: any = {};
  cargar: boolean = false;
  private urlAPI = "http://localhost:3030/alumno/buscar/by/";
  constructor(private http: HttpClient) { 
    let temporal:any = localStorage.getItem('idalumnotemporal');
    this.alumno = JSON.parse(temporal);
   console.log(this.alumno);
    
  }

  ngOnInit(): void {
    this.buscarProfesores();
  

  }
  buscarProfesores() {
    this.cargar = true;
    this.buscarProfesoresServicio().subscribe(
      (response: any) => this.mostrarProfesores(response)

    )
  }

  mostrarProfesores(response: any) {
    this.cargar = false;
    this.alumnos = response;
  }
  buscarProfesoresServicio(): Observable<any> {
   
    return this.http.get<any>(this.urlAPI+this.alumno).pipe(
      catchError(e => "error")
    )
  }

  regresar()
 {
   location.href="/consultaalumnover";
 }


}
