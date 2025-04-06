import { Product } from './Product';
export class Letter extends Product {
  constructor(id: number, name: string, price: number) {
    super(id, name, price);
  }
  override getType(): string {
    return 'Letter';
  }
}
