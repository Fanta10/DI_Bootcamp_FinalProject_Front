import { TestBed } from '@angular/core/testing';

import { FonctionsiteemployeService } from './fonctionsiteemploye.service';

describe('FonctionsiteemployeService', () => {
  let service: FonctionsiteemployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionsiteemployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
