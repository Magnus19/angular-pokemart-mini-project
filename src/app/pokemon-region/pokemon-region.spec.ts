import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonRegion } from './pokemon-region';

describe('PokemonRegion', () => {
  let component: PokemonRegion;
  let fixture: ComponentFixture<PokemonRegion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonRegion],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonRegion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
