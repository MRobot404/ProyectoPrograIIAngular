import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
profesor:any={}
  constructor() { }

  ngOnInit(): void {
    this.profesor=JSON.stringify(localStorage.getItem("profesor"));
    if(!this.profesor){
      location.href="/"
    }
  }

  logout(){
 localStorage.removeItem("profesor");
 location.href="/";
  }
  
}
export class GridListOverviewExample {}
