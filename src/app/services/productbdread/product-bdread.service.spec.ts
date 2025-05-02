import { TestBed } from '@angular/core/testing';

import { ProductBDReadService } from '../productbdread/product-bdread.service';

describe('ProductBDReadService', () => {
  let service: ProductBDReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBDReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
