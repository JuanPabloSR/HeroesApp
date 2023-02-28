import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interface/characters.interfaces';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(character: Character):string {
    return `assets/characters/${ character.id }.webp`
  }

}
