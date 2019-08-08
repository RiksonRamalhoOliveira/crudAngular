import { TestBed } from '@angular/core/testing';

import { ClienteDataService } from './cliente-data.service';

describe('ClienteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteDataService = TestBed.get(ClienteDataService);
    expect(service).toBeTruthy();
  });
});
