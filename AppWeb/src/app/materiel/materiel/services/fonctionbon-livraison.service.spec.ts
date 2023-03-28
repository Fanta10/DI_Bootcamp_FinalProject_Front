import { TestBed } from '@angular/core/testing';

import { FonctionbonLivraisonService } from './fonctionbon-livraison.service';

describe('FonctionbonLivraisonService', () => {
  let service: FonctionbonLivraisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionbonLivraisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
