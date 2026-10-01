import { Injectable, computed, signal } from '@angular/core';

export type PokemonRegion = 'Kanto' | 'Johto' | 'Hoenn';

export interface PokemonEntry {
  id: number;
  name: string;
  region: PokemonRegion;
  type: string;
  heldItem: string;
  description: string;
}

export interface MartProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

export interface CartEntry extends MartProduct {
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  readonly pokemon: PokemonEntry[] = [
    {
      id: 25,
      name: 'Pikachu',
      region: 'Kanto',
      type: 'Electric',
      heldItem: 'Oran Berry',
      description: 'Stores electricity in its cheeks.',
    },
    {
      id: 1,
      name: 'Bulbasaur',
      region: 'Kanto',
      type: 'Grass / Poison',
      heldItem: 'Miracle Seed',
      description: 'The seed on its back grows as it absorbs sunlight.',
    },
    {
      id: 4,
      name: 'Charmander',
      region: 'Kanto',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'Its tail flame burns brighter when it is excited.',
    },
    {
      id: 7,
      name: 'Squirtle',
      region: 'Kanto',
      type: 'Water',
      heldItem: 'Mystic Water',
      description: 'It sprays accurate streams of water from its mouth.',
    },
    {
      id: 133,
      name: 'Eevee',
      region: 'Kanto',
      type: 'Normal',
      heldItem: 'Soothe Bell',
      description: 'Its adaptable nature gives it several evolutionary paths.',
    },
    {
      id: 143,
      name: 'Snorlax',
      region: 'Kanto',
      type: 'Normal',
      heldItem: 'Leftovers',
      description: 'A relaxed giant known for its enormous appetite.',
    },

    {
      id: 152,
      name: 'Chikorita',
      region: 'Johto',
      type: 'Grass',
      heldItem: 'Miracle Seed',
      description: 'The leaf on its head releases a calming fragrance.',
    },
    {
      id: 155,
      name: 'Cyndaquil',
      region: 'Johto',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'Flames along its back protect it when startled.',
    },
    {
      id: 158,
      name: 'Totodile',
      region: 'Johto',
      type: 'Water',
      heldItem: 'Mystic Water',
      description: 'A spirited Pokémon with powerful jaws.',
    },
    {
      id: 179,
      name: 'Mareep',
      region: 'Johto',
      type: 'Electric',
      heldItem: 'Magnet',
      description: 'Its wool builds up static electricity as it grows.',
    },
    {
      id: 175,
      name: 'Togepi',
      region: 'Johto',
      type: 'Fairy',
      heldItem: 'Soothe Bell',
      description: 'It shares happiness with kind-hearted trainers.',
    },
    {
      id: 249,
      name: 'Lugia',
      region: 'Johto',
      type: 'Psychic / Flying',
      heldItem: 'Sharp Beak',
      description: 'A guardian of the seas that can calm raging storms.',
    },

    {
      id: 252,
      name: 'Treecko',
      region: 'Hoenn',
      type: 'Grass',
      heldItem: 'Miracle Seed',
      description: 'Small hooks on its feet help it climb smooth walls.',
    },
    {
      id: 255,
      name: 'Torchic',
      region: 'Hoenn',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'It keeps a warm ember inside its body.',
    },
    {
      id: 258,
      name: 'Mudkip',
      region: 'Hoenn',
      type: 'Water',
      heldItem: 'Mystic Water',
      description: 'Its head fin senses movement through water and air.',
    },
    {
      id: 280,
      name: 'Ralts',
      region: 'Hoenn',
      type: 'Psychic / Fairy',
      heldItem: 'Twisted Spoon',
      description: 'It senses emotions and responds to positive people.',
    },
    {
      id: 304,
      name: 'Aron',
      region: 'Hoenn',
      type: 'Steel / Rock',
      heldItem: 'Hard Stone',
      description: 'Its steel armor withstands powerful attacks.',
    },
    {
      id: 384,
      name: 'Rayquaza',
      region: 'Hoenn',
      type: 'Dragon / Flying',
      heldItem: 'Dragon Fang',
      description: 'It watches over the balance of the sky.',
    },
  ];

  readonly products: MartProduct[] = [
    { id: 'potion', name: 'Potion', description: 'Restores 20 HP.', price: 300, icon: '🧪' },
    {
      id: 'super-potion',
      name: 'Super Potion',
      description: 'Restores 60 HP.',
      price: 700,
      icon: '🧴',
    },
    {
      id: 'hyper-potion',
      name: 'Hyper Potion',
      description: 'Restores 120 HP.',
      price: 1200,
      icon: '💧',
    },
    {
      id: 'pokeball',
      name: 'Poké Ball',
      description: 'A standard Pokémon-catching tool.',
      price: 200,
      icon: '🔴',
    },
    {
      id: 'great-ball',
      name: 'Great Ball',
      description: 'A ball with an improved catch rate.',
      price: 600,
      icon: '🔵',
    },
    {
      id: 'ultra-ball',
      name: 'Ultra Ball',
      description: 'A high-performance catching tool.',
      price: 1200,
      icon: '⚫',
    },
    { id: 'antidote', name: 'Antidote', description: 'Cures poison.', price: 200, icon: '🌿' },
    {
      id: 'revive',
      name: 'Revive',
      description: 'Revives a fainted Pokémon.',
      price: 1500,
      icon: '✨',
    },
    {
      id: 'escape-rope',
      name: 'Escape Rope',
      description: 'Returns you to the last Pokémon Center.',
      price: 550,
      icon: '🪢',
    },
    {
      id: 'full-heal',
      name: 'Full Heal',
      description: 'Cures all status conditions.',
      price: 600,
      icon: '⭐',
    },
  ];

  private readonly cartState = signal<CartEntry[]>([]);
  readonly cart = this.cartState.asReadonly();

  readonly cartCount = computed(() =>
    this.cart().reduce((total, item) => total + item.quantity, 0),
  );

  readonly cartTotal = computed(() =>
    this.cart().reduce((total, item) => total + item.price * item.quantity, 0),
  );

  pokemonFor(region: PokemonRegion): PokemonEntry[] {
    return this.pokemon.filter((entry) => entry.region === region);
  }

  imageUrl(pokemon: PokemonEntry): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  }

  addToCart(productId: string): void {
    const product = this.products.find((item) => item.id === productId);
    if (!product) return;

    this.cartState.update((cart) => {
      const existing = cart.find((item) => item.id === productId);

      return existing
        ? cart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...cart, { ...product, quantity: 1 }];
    });
  }

  removeOne(productId: string): void {
    this.cartState.update((cart) =>
      cart
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  removeItem(productId: string): void {
    this.cartState.update((cart) => cart.filter((item) => item.id !== productId));
  }

  clearCart(): void {
    this.cartState.set([]);
  }
}
