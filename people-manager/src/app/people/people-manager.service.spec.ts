import { TestBed } from '@angular/core/testing';

import { PeopleManagerService } from './people-manager.service';

describe('PeopleManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleManagerService = TestBed.get(PeopleManagerService);
    expect(service).toBeTruthy();
  });
});
