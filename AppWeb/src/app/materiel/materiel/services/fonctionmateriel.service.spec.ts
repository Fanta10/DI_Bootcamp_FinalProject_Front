import { TestBed } from '@angular/core/testing';

import { FonctionmaterielService } from './fonctionmateriel.service';

describe('FonctionmaterielService', () => {
  let service: FonctionmaterielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionmaterielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
