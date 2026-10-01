import { Component, computed, inject, input, output } from '@angular/core';
import { PokemonEntry, PokemonService } from '../pokemon-service/pokemon-service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCardComponent {
  readonly pokemon = input.required<PokemonEntry>();
  readonly selected = output<PokemonEntry>();

  private readonly pokemonService = inject(PokemonService);

  readonly image = computed(() => this.pokemonService.imageUrl(this.pokemon()));
}
