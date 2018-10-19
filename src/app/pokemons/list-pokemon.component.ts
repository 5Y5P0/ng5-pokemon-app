import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';

import { Router } from '@angular/router';

import { PokemonsService } from './pokemons.service'

@Component({
  selector: 'listPokemon',
  templateUrl: './app/pokemons/list-pokemon.component.html',
  providers: [PokemonsService]
})

export class ListPokemonComponent implements OnInit { 
  
  pokemons: Pokemon[] = null;

constructor (private  router: Router, private pokemonsService: PokemonsService) { 
  //let pokemonsService = new PokemonsService(); // NE SURTOUT PAS FAIRE
}

  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez cliqué sur " + pokemon.name);
    let link = ['/pokemon',pokemon.id];
    this.router.navigate(link);
  }

}