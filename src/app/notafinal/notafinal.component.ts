import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-notafinal',
  templateUrl: './notafinal.component.html',
  styleUrls: ['./notafinal.component.css']
})
export class NotafinalComponent implements OnInit {
  notas: any = [];
  profesor: any = {};

   
  cargar: boolean = false;
  private urlAPI = "http://localhost:3030/nota/buscar/by/";
  constructor(private http: HttpClient) { 
    let temporal:any = localStorage.getItem('id');
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
 
guardar(){
  
}
}
