import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public allPokemons: any;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.allPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results
        this.allPokemons = this.setAllPokemons
      }
    )
  }

  public search(value: string) {
    console.log(value)
    const filter = this.setAllPokemons.filter((item: any) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })
    this.allPokemons = filter;
    console.log(filter)
  }
}
