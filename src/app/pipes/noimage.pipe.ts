import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[], pocicion:number=0): string {
   
    if(!images){
      return 'assets/img/noimage.png';
    }
     
    if(images.length > 0){
      return images[pocicion].url;
    }

    else{
      return 'assets/img/noimage.png';
    }

  }

}
