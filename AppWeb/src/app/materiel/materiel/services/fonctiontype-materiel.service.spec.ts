import { TestBed } from '@angular/core/testing';

import { FonctiontypeMaterielService } from './fonctiontype-materiel.service';

describe('FonctiontypeMaterielService', () => {
  let service: FonctiontypeMaterielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctiontypeMaterielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
