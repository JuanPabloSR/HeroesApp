import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../interface/characters.interfaces';
import { switchMap } from 'rxjs/operators';
import { CharactersService } from '../../services/characters.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [ `
    img {

    }
  `],
})
export class HeroComponent implements OnInit {
  character!: Character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.characterService.getCharacterById(id)))
      .subscribe(character => this.character = character);
  }

  return() {
    this.router.navigate(['/heroes/list'])
  }
}
