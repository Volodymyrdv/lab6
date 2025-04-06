import { IProduct } from '../interface/IProduct';
export abstract class Packaging {
  private product: IProduct;

  constructor(product: IProduct) {
    this.product = product;
  }

  getProduct(): IProduct {
    return this.product;
  }

  getType(): string {
    return 'Package';
  }
}
