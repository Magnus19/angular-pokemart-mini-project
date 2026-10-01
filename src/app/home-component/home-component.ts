import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../pokemon-service/pokemon-service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  readonly pokemonService: PokemonService = inject(PokemonService);

  readonly featuredPokemon = computed(() => this.pokemonService.pokemonFor('Kanto').slice(0, 3));

  readonly regions = [
    {
      name: 'Kanto',
      route: '/kanto',
      description: 'Classic companions and first-route favorites.',
      color: 'coral',
    },
    {
      name: 'Johto',
      route: '/johto',
      description: 'Quiet forests, old legends, and new starters.',
      color: 'gold',
    },
    {
      name: 'Hoenn',
      route: '/hoenn',
      description: 'A diverse region shaped by land and sea.',
      color: 'teal',
    },
  ];
}
