import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  pasises: any[] = [];

  constructor(private http: HttpClient) {
       
    console.log("Construcctor del home echo");
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (respuesta:any) =>{
          
          this.pasises = respuesta;
          console.log(respuesta); 
    } )

   }

   

  ngOnInit(): void {
  }

}
