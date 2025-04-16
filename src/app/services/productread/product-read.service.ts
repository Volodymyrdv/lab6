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

  public addProduct(product: IProduct) {
    const productToAdd = product;
    productToAdd.setID(this.products.length + 1);
    this.products.push(productToAdd);
  }

  public editProduct(product: IProduct) {
    const productToEdit = product;
    this.products.forEach((item, index) => {
      if (item.getID() === productToEdit.getID()) {
        this.products[index] = productToEdit;
      }
    });
  }

  public deleteProduct(n: number) {
    this.products = this.products.filter((product) => {
      return product.getID() !== n;
    });
    this.products.forEach((product, index) => {
      product.setID(index + 1);
    });
  }
}
