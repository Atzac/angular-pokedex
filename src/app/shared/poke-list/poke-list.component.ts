import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private pokeApiService: PokeApiService) { }

  allPokemons: any;

  ngOnInit(): void {
    this.pokeApiService.allPokemons.subscribe(
      res => {
        this.allPokemons = res.results
        console.log(this.allPokemons)
      }
    )
  }

}
