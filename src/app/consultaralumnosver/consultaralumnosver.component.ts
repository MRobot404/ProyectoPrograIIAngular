import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
@Component({
  selector: 'app-consultaralumnosver',
  templateUrl: './consultaralumnosver.component.html',
  styleUrls: ['./consultaralumnosver.component.css']
})
export class ConsultaralumnosverComponent implements OnInit {
  notas: any = [];
  profesor: any = {};

   
  cargar: boolean = false;
  private urlAPI = "http://localhost:3030/nota/buscar/by/";
  constructor(private http: HttpClient) { 
    let temporal:any = localStorage.getItem('curs');
    console.log(temporal);
    this.profesor = JSON.parse(temporal);
    
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
    this.notas = response;
  }
  buscarProfesoresServicio(): Observable<any> {
   
    return this.http.get<any>(this.urlAPI+this.profesor).pipe(
      catchError(e => "error")
    )
  }
 
guardar(nota:any){
localStorage.setItem("idalumnotemporal",JSON.stringify(nota.alumnoIdalumno));
console.log(localStorage.getItem("idalumnotemporal"));
location.href="/consultaalumnodetalle";

  }

}
