import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngular';
  productos=[
    {"id":1,"name":"Hp Pavilion","description":"buena marca","price":"170.00"},
    {"id":1,"name":"Oferton Derrochon","description":"mala marca","price":"150.00"}
  ];
  counter=0;
  sumar(event:Event){
    this.counter=this.counter+1;
    console.log("aja");
  }
}
