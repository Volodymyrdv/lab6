import { IProduct } from '../interface/IProduct';
import { Packaging } from './Packaging';
export class PremiumPackaging extends Packaging {
  private price: number = 100;

  constructor(product: IProduct) {
    super(product);
  }

  getPrice(): number {
    return this.price;
  }

  override getType(): string {
    return 'Premium Packaging';
  }
}
