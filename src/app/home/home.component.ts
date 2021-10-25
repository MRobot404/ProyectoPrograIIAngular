import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  usuario: any = {};

  
  constructor() { }

  ngOnInit(): void {
    this.usuario =JSON.stringify(localStorage.getItem("profesor"));
    if(!this.usuario){
      location.href="/";

    }
    
  }

  logout(){
 localStorage.removeItem("profesor");
 location.href="/";
  }
  
}
export class GridListOverviewExample {}
