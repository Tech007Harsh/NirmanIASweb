import { TestBed } from '@angular/core/testing';

import { EnquiryserviceService } from './enquiryservice.service';

describe('EnquiryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnquiryserviceService = TestBed.get(EnquiryserviceService);
    expect(service).toBeTruthy();
  });
});
