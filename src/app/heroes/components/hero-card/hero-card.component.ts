import { Component, Input } from '@angular/core';
import { Character } from '../../interface/characters.interfaces';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent {

@Input() character!: Character;

}
