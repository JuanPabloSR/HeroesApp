import { Component, OnInit } from '@angular/core';
import { Character } from '../../interface/characters.interfaces';
import { CharactersService } from '../../services/characters.service';

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
      .all{
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
    devil_fruit:'',
    first_appearance:'',
    affiliations:'',
    alt_img: ''
  }
  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {}

  save(){
    console.log(this.character)

    if(this.character.character.trim().length ===0){
      return
    }

    this.characterService.addCharacter(this.character)
    .subscribe(resp => {
      console.log('Response');
    })
  }
}
