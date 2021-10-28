import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-consultacursoprofesor',
  templateUrl: './consultacursoprofesor.component.html',
  styleUrls: ['./consultacursoprofesor.component.css']
})
export class ConsultacursoprofesorComponent implements OnInit {
  cursos:any=[];
  cargar:boolean=false;
  profesor: any = {};
  private urlAPI="http://localhost:3030/profesor/buscar/porr/";
  constructor(private http:HttpClient) { 
    let temporal: any = localStorage.getItem('profesor');
    console.log(temporal);
      this.profesor = JSON.parse(temporal);
  }

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
    console.log(response)
    this.cursos=response.cursolist;
    
  }
  buscarProfesoresServicio():Observable<any>{
    return this.http.get<any>(this.urlAPI+this.profesor.idProfesor).pipe(
      catchError(e=>"error")
    )
      }
}
