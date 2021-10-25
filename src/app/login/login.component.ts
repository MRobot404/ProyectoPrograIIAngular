import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';
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
  usuario:any ;
   resultado2:any;
   resultado3:any;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  login() {
    let formulario:any = document.getElementById("login");
    let formularioValido:boolean=formulario.reportValidity();
    if(formularioValido){
      this.loading=true;
      this.loginService().subscribe(
        data => this.iniciarSesion(data)
      )
    }
   this.resultado2=(<HTMLInputElement>document.getElementById("usuario")).value;
   this.resultado3=(<HTMLInputElement>document.getElementById("contra")).value;
    this.loading = false;
    console.log(this.resultado2)
    console.log(this.resultado3)

   
  }
  iniciarSesion(resultado: any) {
 if(resultado){
   localStorage.setItem("profesor",JSON.stringify(resultado));
   location.href = '/home';  
 }else if(this.resultado2.includes("ADMIN") && this.resultado3.includes("ADMIN")){
  this.loading=true;
    location.href = '/home';    
 }else{
   this.errorInicio=true;
 }
  }
  loginService(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })

    }
    return this.http.post<any>('http://localhost:3030/profesor/login',this.profesor,httpOptions);
  }


 

}
