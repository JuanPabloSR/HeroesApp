import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Character } from '../../interface/characters.interfaces';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      mat-form-field {
        display: block;
        position: relative;
        text-align: left;
        width: 100%;
      }
    `,
  ],
})
export class SearchComponent implements OnInit {
  term: string = '';
  characters: Character[] = [];

  characterSelect: Character | undefined;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {}

  searching() {
    this.charactersService
      .getSuggestions(this.term.trim())
      .subscribe((characters) => (this.characters = characters));
  }

  optionSelect(event: MatAutocompleteSelectedEvent) {

    if(!event.option.value){
      this.characterSelect = undefined;
      return;
    }

    const character: Character = event.option.value;
    this.term = character.character;

    this.charactersService
      .getCharacterById(character.id!)
      .subscribe((character) => (this.characterSelect = character));
  }
}
