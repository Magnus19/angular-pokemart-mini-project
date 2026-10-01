import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PokemonRegionComponent } from './pokemon-region/pokemon-region';
import { PokemartComponent } from './pokemart/pokemart';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'kanto',
    component: PokemonRegionComponent,
    data: { region: 'Kanto' },
  },
  {
    path: 'johto',
    component: PokemonRegionComponent,
    data: { region: 'Johto' },
  },
  {
    path: 'hoenn',
    component: PokemonRegionComponent,
    data: { region: 'Hoenn' },
  },
  { path: 'pokemart', component: PokemartComponent },
  { path: '**', redirectTo: 'home' },
];
