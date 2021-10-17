import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  profesores:any=[];
  cargar:boolean=false;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  this.buscarProfesores();
  }

  buscarProfesores(){
   this.cargar=true; 
   this.buscarProfesoresServicio().subscribe(
     (response:any) => this.mostrarProfesores(response)
   )
  }

  mostrarProfesores(response:any){
    this.cargar=false;
    this.profesores=response;
  }

  buscarProfesoresServicio():Observable<any>{
return this.http.get<any>("http://localhost:3030/profesor/buscar").pipe(
  catchError(e=>"error")
)
  }

}
export class PaginatorOverviewExample {}
