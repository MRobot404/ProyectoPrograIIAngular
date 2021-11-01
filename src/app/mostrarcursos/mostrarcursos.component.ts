import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-mostrarcursos',
  templateUrl: './mostrarcursos.component.html',
  styleUrls: ['./mostrarcursos.component.css'],
})
export class MostrarcursosComponent implements OnInit {
  cursos: any = [];
  cargar: boolean = false;
  constructor(private http: HttpClient) {}

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
    this.cursos = response;
  }

  buscarProfesoresServicio(): Observable<any> {
    return this.http
      .get<any>('http://localhost:3030/curso/buscar')
      .pipe(catchError((e) => 'error'));
  }
  eliminar(curso: any) {
    this.cargar = true;
    this.eliminarProfesoresServicio(curso.idcurso).subscribe(
      (response: any) => this.buscarProfesores()
    );
  }

  editar(curso: any) {
   console.log(curso);
   localStorage.setItem("cursoid",JSON.stringify(curso));
console.log(localStorage.getItem("cursoid"));
location.href="/actualizarcurso";
  }
  eliminarProfesoresServicio(id: any): Observable<any> {
    return this.http
      .delete<any>('http://localhost:3030/curso/eliminar/' + id)
      .pipe(catchError((e) => 'error'));
  }
}
