import { TestBed } from '@angular/core/testing';

import { SaintserviceService } from './saintservice.service';

describe('SaintserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaintserviceService = TestBed.get(SaintserviceService);
    expect(service).toBeTruthy();
  });
});
