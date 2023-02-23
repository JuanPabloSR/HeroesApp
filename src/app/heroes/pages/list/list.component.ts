import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interface/characters.interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private CharactersService: CharactersService) {}

  ngOnInit(): void {
    this.CharactersService.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }
}
