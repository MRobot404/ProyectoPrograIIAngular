import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-notafinal',
  templateUrl: './notafinal.component.html',
  styleUrls: ['./notafinal.component.css']
})
export class NotafinalComponent implements OnInit {
  notas:any=[];
  cargar:boolean=false;
  private urlAPI="http://localhost:3030/nota/buscar";
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
    this.notas=response;
  }
  buscarProfesoresServicio():Observable<any>{
    return this.http.get<any>(this.urlAPI).pipe(
      catchError(e=>"error")
    )
      }
cambiarnota(){
  
}

}
