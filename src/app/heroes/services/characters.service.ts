import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interface/characters.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor( private http:HttpClient) { }

  getCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>('http://localhost:3000/characters')
  }

}
