import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private spotify: SpotifyService) {
    
        this.loading = true;
        this.error = false;

        this.spotify.getNewReleases().subscribe( (data:any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, (errorSerivicion)=>{

          this.error = true;
          this.loading = false;
          this.mensajeError = errorSerivicion.error.error.message;

        } );

   }

 
}