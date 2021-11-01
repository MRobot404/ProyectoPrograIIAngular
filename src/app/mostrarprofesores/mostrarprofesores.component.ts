import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-mostrarprofesores',
  templateUrl: './mostrarprofesores.component.html',
  styleUrls: ['./mostrarprofesores.component.css']
})
export class MostrarprofesoresComponent implements OnInit {
  alumnos: any = [];
  cargar: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarProfesores();
  }
  buscarProfesores() {
    this.cargar = true;
    this.buscarProfesoresServicio().subscribe((response: any) =>
      this.mostrarProfesores(response)
    );
  }

  mostrarProfesores(response: any) {
    this.cargar = false;
    this.alumnos = response;
  }

  buscarProfesoresServicio(): Observable<any> {
    return this.http
      .get<any>('http://localhost:3030/alumno/buscar')
      .pipe(catchError((e) => 'error'));
  }
  eliminar(alumno: any) {
    this.cargar = true;
    this.eliminarProfesoresServicio(alumno.idalumno).subscribe(
      (response: any) => this.buscarProfesores()
    );
  }

  actualizar(alumno:any){
    console.log(alumno);
    localStorage.setItem("alumno",JSON.stringify(alumno));
    console.log(localStorage.getItem("alumno"));
    location.href="/actualizaralumno";
   
   
    }

  eliminarProfesoresServicio(id: any): Observable<any> {
    return this.http
      .delete<any>('http://localhost:3030/alumno/eliminar/' + id)
      .pipe(catchError((e) => 'error'));
  }
}
