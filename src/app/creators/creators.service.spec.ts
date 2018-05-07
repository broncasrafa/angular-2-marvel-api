import { TestBed, inject } from '@angular/core/testing';

import { CreatorsService } from './creators.service';

describe('CreatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatorsService]
    });
  });

  it('should be created', inject([CreatorsService], (service: CreatorsService) => {
    expect(service).toBeTruthy();
  }));
});
