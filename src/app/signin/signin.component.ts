import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  profesor:any={};
loading:boolean=false;
cursos:any =[];
curso:any={};
crear:boolean =false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

 

}

