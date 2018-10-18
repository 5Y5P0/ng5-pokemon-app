import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

import { Router } from '@angular/router';

@Component({
  selector: 'listPokemon',
  templateUrl: './app/list-pokemon.component.html'
})

export class ListPokemonComponent implements OnInit { 
  
  private pokemons: Pokemon[];
  private title: string = "Pokémons";

constructor (private  router: Router) { }


  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez cliqué sur " + pokemon.name);
    let link = ['/pokemon',pokemon.id];
    this.router.navigate(link);
  }

}