import { IProduct } from '../interface/IProduct';
import { Packaging } from './Packaging';
export class SimplePackaging extends Packaging {
  private price: number = 30;

  constructor(product: IProduct) {
    super(product);
  }

  override getPrice(): number {
    return this.price;
  }

  override getType(): string {
    return 'Simple';
  }
}
