import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllaPokemons: any;
  public getAllaPokemons: any;

  constructor( private pokeApiService: PokeApiService){}

  ngOnInit():void{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllaPokemons = res.results;
        this.getAllaPokemons = this.setAllaPokemons;
      }
    );
  }
  public getSearch(value: string){
    const filter = this.setAllaPokemons.filter((res: any) =>{
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllaPokemons = filter;
  }
}
