import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/classes/interface/IProduct';
import { ProductFactory } from 'src/app/classes/class/ProductFactory';
const API_URL = 'https://api.jsonbin.io/v3/b/67f2a9048561e97a50f9c6a0';

@Injectable({
  providedIn: 'root',
})
export class ProductReadService {
  public products: IProduct[] = [];

  constructor() {}

  public async load() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        let data = json.record;
        this.products = data.map((item: any) => {
          return ProductFactory.createProduct(item);
        });
      });
  }
}
