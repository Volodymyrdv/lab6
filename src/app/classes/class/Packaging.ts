import { IProduct } from '../interface/IProduct';
export abstract class Packaging {
  private product: IProduct;
  constructor(product: IProduct) {
    this.product = product;
  }

  getProduct(): IProduct {
    return this.product;
  }
  getPrice(): number {
    return 0;
  }
  getType(): string {
    return 'Package';
  }
}
