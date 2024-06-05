import { TestBed } from '@angular/core/testing';

import { PagesResolverService } from './pages-resolver.service';

describe('PagesResolverService', () => {
  let service: PagesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
