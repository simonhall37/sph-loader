import { TestBed } from '@angular/core/testing';

import { LoaderUtilsService } from './loader-utils.service';

describe('LoaderUtilsService', () => {
  let service: LoaderUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
