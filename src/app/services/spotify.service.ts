import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log ("Spotify servicio en uso");
  }


  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBEt2uwCtAzQPmLrJca2TTWx8vVw4WQrMCCvRqG-DzWmPDSuu14K_x7ihmHEtzsg_mqK1dRJo33mJo5MSo'
      });

      return this.http.get(url, {headers});
  
  }

 

  getNewReleases(){

    return this.getQuery('browse/new-releases').pipe( map( data =>  data['albums'].items));
    
    
  }

  getAristas(termino: string){
  
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe( map( data =>  data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }
  
  getGetTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe( map( data =>  data['tracks']));
  }


}
