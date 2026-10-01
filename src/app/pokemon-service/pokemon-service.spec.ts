import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon-service';

describe('PokemonService', () => {
  let component: PokemonService;
  let fixture: ComponentFixture<PokemonService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonService],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
