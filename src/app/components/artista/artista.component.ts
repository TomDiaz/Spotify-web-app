import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artista:any = {};
  topTracks:any[] = [];
  loading:boolean;

  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService
              
    ) { 
 
    this.loading = true;

    this.router.params.subscribe( params =>{
          this.getArtista(params['id']);
          this.getGetTopTracks(params['id']);
    });

  }
  

  getArtista(id:string){

    this.loading = true;

      this.spotify.getArtista(id).subscribe( data =>{

        console.log(data);
        this.artista = data;
        this.loading = false;
      });
  }

  getGetTopTracks(id:string){

      this.spotify.getGetTopTracks(id).subscribe(data =>{

        this.topTracks = data;
        console.log(data); 
      })
  }

}
