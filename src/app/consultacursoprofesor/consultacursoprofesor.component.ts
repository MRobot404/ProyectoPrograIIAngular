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
  profesores:any=[];
  cargar:boolean=false;
  private urlAPI="http://localhost:3030/profesor/buscar/porr";
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
    console.log(response)
    this.profesores=response;
  }
  buscarProfesoresServicio():Observable<any>{
    return this.http.get<any>(this.urlAPI+"/25").pipe(
      catchError(e=>"error")
    )
      }
}
