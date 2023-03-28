import { TestBed } from '@angular/core/testing';

import { FonctionaffectationService } from './fonctionaffectation.service';

describe('FonctionaffectationService', () => {
  let service: FonctionaffectationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionaffectationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
