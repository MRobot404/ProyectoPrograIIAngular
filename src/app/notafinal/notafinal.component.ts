import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-notafinal',
  templateUrl: './notafinal.component.html',
  styleUrls: ['./notafinal.component.css']
})
export class NotafinalComponent implements OnInit {
  notas: any = [];
  id: any ={};
  temporal: any;
   
  cargar: boolean = false;
  private urlAPI = "http://localhost:3030/nota/buscar/by/";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarProfesores();
   this.temporal = localStorage.getItem('id');
    this.id = JSON.parse(this.temporal);
    console.log(this.temporal = localStorage.getItem('id'))

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
   
    return this.http.get<any>(this.urlAPI+localStorage.getItem('id')).pipe(
      catchError(e => "error")
    )
  }
  cambiarnota() {

  }

}
