import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-perfilprofesor',
  templateUrl: './perfilprofesor.component.html',
  styleUrls: ['./perfilprofesor.component.css']
})
export class PerfilprofesorComponent implements OnInit {
  profesor:any=[];
  cargar:boolean=false;
  private urlAPI="http://localhost:3030/profesor/buscar/porr/4";
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
    this.profesor=response;
  }
  buscarProfesoresServicio():Observable<any>{
    return this.http.get<any>(this.urlAPI).pipe(
      catchError(e=>"error")
    )
      }
cambiarnota(){
  
}
}
