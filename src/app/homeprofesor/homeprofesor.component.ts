import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-homeprofesor',
  templateUrl: './homeprofesor.component.html',
  styleUrls: ['./homeprofesor.component.css']
})
export class HomeprofesorComponent implements OnInit {
  profesores:any =[];
  profesor: any = {};
  constructor(private http: HttpClient) {
    let temporal: any = localStorage.getItem('profesor');
    console.log(temporal);
      this.profesor = JSON.parse(temporal);
   }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("profesor");
    location.href="/";
     }

}
