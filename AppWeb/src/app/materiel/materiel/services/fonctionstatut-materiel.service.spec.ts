import { TestBed } from '@angular/core/testing';

import { FonctionstatutMaterielService } from './fonctionstatut-materiel.service';

describe('FonctionstatutMaterielService', () => {
  let service: FonctionstatutMaterielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionstatutMaterielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
