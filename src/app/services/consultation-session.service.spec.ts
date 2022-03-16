import { TestBed } from '@angular/core/testing';

import { ConsultationSessionService } from './consultation-session.service';

describe('ConsultationSessionService', () => {
  let service: ConsultationSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
