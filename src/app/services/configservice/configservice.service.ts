import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductType } from 'src/app/classes/class/ProductName';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  selectedTypes$: BehaviorSubject<ProductType[]> = new BehaviorSubject<
    ProductType[]
  >([]);

  setSelectedTypes(types: ProductType[]) {
    this.selectedTypes$.next(types);
  }

  constructor() {}
}
