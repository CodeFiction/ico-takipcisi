import { TestBed, inject } from '@angular/core/testing';

import { IcoListService } from './ico-list.service';

describe('IcoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IcoListService]
    });
  });

  it('should be created', inject([IcoListService], (service: IcoListService) => {
    expect(service).toBeTruthy();
  }));
});
