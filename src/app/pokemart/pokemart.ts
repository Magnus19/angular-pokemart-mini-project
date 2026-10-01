import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service/pokemon-service';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css',
})
export class PokemartComponent {
  readonly pokemonService: PokemonService = inject(PokemonService);

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(price);
  }
}
