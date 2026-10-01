import { Component, computed, inject, input, signal } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card';
import { PokemonEntry, PokemonRegion, PokemonService } from '../pokemon-service/pokemon-service';

@Component({
  selector: 'app-pokemon-region',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-region.html',
  styleUrl: './pokemon-region.css',
})
export class PokemonRegionComponent {
  readonly region = input<PokemonRegion>('Kanto');

  private readonly pokemonService = inject(PokemonService);

  readonly pokemon = computed(() => this.pokemonService.pokemonFor(this.region()));

  readonly selectedPokemon = signal<PokemonEntry | null>(null);

  selectPokemon(pokemon: PokemonEntry): void {
    this.selectedPokemon.set(pokemon);
  }
}
