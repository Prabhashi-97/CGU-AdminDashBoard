import { TestBed } from '@angular/core/testing';

import { CompanySessionService } from './company-session.service';

describe('CompanySessionService', () => {
  let service: CompanySessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanySessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
