import { TestBed } from '@angular/core/testing';

import { FonctionemployeService } from './fonctionemploye.service';

describe('FonctionemployeService', () => {
  let service: FonctionemployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionemployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
