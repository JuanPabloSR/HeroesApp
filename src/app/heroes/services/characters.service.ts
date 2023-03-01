import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interface/characters.interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private BaseUrl: string = environment.BaseUrl;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.BaseUrl}/characters`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.BaseUrl}/characters/${id}`);
  }

  getSuggestions(term: string): Observable<Character[]> {
    return this.http.get<Character[]>(
      `${this.BaseUrl}/characters?q=${term}&_limit=5`
    );
  }

  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(`${this.BaseUrl}/characters`, character);
  }

  editCharacter(character: Character): Observable<Character> {
    return this.http.put<Character>(
      `${this.BaseUrl}/characters/${character.id}`,
      character
    );
  }

  deleteCharacter(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BaseUrl}/characters/${id}`);
  }
}
