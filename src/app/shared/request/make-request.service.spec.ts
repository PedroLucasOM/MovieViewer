import { TestBed } from '@angular/core/testing';

import { MakeRequestService } from './make-request.service';

describe('MakeRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakeRequestService = TestBed.get(MakeRequestService);
    expect(service).toBeTruthy();
  });
});
