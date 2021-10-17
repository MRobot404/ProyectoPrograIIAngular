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
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  login() {
   var resultado=(<HTMLInputElement>document.getElementById("usuario")).value;
   var resultado2=(<HTMLInputElement>document.getElementById("contra")).value;
    this.loading = false;
    console.log(resultado)
    console.log(resultado2)
    if (resultado.includes("ADMIN") && resultado2.includes("ADMIN")) {
  this.loading=true;
    location.href = '/home';    
    } else {
      this.errorInicio=true;
    }
   
  }
  iniciarSesion(resultado: any) {
 
  
  }


 

}
