import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PokemonsService {

    constructor(private http: HttpClient) { }

    private pokemonUrl = 'api/pokemons';

    private log(log: string) {
      console.info(log);
    }

    private handleError<T>(operation = 'operation', result?: T) {

      return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T);
      };
      
    }

    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {
      
      return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
        tap(_ => this.log(`fecthed pokemons`)),
        catchError(this.handleError(`getPokemons`, []))
        );
      
    }
    
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon>  {
      
      const url = `${this.pokemonUrl}/${id}`; // syntaxe ES6

      return this.http.get<Pokemon>(url).pipe(
        tap(_ => this.log(`fecthed pokemon id=${id}`)),
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
        );

    }

    getPokemonTypes(): string[] {

      return ['Plante','Feu','Eau','Insecte','Normal','Electrik','Poison','Fée','Vol'];

    }

}