import { TestBed } from '@angular/core/testing';

import { StoreConfigService } from './store-config.service';

describe('StoreConfigService', () => {
  let service: StoreConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
