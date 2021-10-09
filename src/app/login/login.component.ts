import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {catchError}from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorInicio: boolean = false;
  loading: boolean = false;
  profesor: any = {};
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  login() {
    let formulario: any = document.getElementById('login');
    let formularioValido: boolean = formulario.reportValidity();
    if (formularioValido) {
      this.loading = true;
      this.loginService().subscribe(
        data  => this.iniciarSesion(data)
      )
    }
  }
  iniciarSesion(resultado: any) {
    this.loading = false;
    console.log(resultado)
    
    if (resultado.length>0) {

      localStorage.setItem('profesor', JSON.stringify(resultado));
      location.href = '/home';
      
    } else {
      this.errorInicio=true;
    }
  
  }

  loginService() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(
      'http://localhost:3030/profesor/login',
      this.profesor,
      httpOptions
    ).pipe(
      catchError(e => "Error")
    );
  }

 
}
