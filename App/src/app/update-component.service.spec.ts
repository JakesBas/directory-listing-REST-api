import { TestBed } from '@angular/core/testing';

import { UpdateComponentService } from './update-component.service';

describe('UpdateComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateComponentService = TestBed.get(UpdateComponentService);
    expect(service).toBeTruthy();
  });
});
