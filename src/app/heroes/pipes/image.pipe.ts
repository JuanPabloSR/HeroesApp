import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interface/characters.interfaces';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(character: Character): string {
    if (!character.id && !character.alt_img) {
      return 'assets/no-image.png';
    } else if (character.alt_img) {
      return character.alt_img;
    }

    return `assets/characters/${character.id}.webp`;
  }
}
