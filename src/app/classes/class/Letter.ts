import { Product } from './Product';
export class Letter extends Product {
  constructor(id: string, name: string, price: number) {
    super(id, name, price);
  }
  override getType(): string {
    return 'Letter';
  }
}
