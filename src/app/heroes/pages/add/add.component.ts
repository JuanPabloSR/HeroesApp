import { Component, OnInit } from '@angular/core';
import { Character } from '../../interface/characters.interfaces';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      mat-form-field {
        position: relative;
        text-align: left;
        width: 50%;
      }
      .all {
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  character: Character = {
    character: '',
    bounty: '',
    devil_fruit: '',
    first_appearance: '',
    affiliations: '',
    alt_img: '',
  };
  constructor(
    private characterService: CharactersService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activedRoute.params
      .pipe(switchMap(({ id }) => this.characterService.getCharacterById(id)))
      .subscribe(character => (this.character = character));
  }

  save() {
    console.log(this.character);

    if (this.character.character.trim().length === 0) {
      return;
    }

    if (this.character.id) {
      this.characterService
        .editCharacter(this.character)
        .subscribe((character) => (this.character = character));
    } else {
      this.characterService
        .addCharacter(this.character)
        .subscribe((character) => {
          this.router.navigate(['/heroes/edit', character.id]);
        });
    }

    console.log(this.character.id);
  }

  delete() {
    this.characterService.deleteCharacter(this.character.id!).subscribe(resp => {
      this.router.navigate(['/heroes'])
    })
  }
}
