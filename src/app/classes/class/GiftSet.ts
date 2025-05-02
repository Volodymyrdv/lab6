import { Product } from './Product';

export class GiftSet extends Product {
  private itemCount: number;
  private weight: number;
  constructor(
    id: string,
    name: string,
    price: number,
    itemCount: number,
    weight: number
  ) {
    super(id, name, price);
    this.itemCount = itemCount;
    this.weight = weight;
  }
  getItemCount(): number {
    return this.itemCount;
  }

  getWeight(): number {
    return this.weight;
  }

  override getType(): string {
    return 'GiftSet';
  }

  override getDetails(): string[] {
    let details = [];
    details.push('Кількість товарів: ' + this.itemCount);
    details.push('Вага: ' + this.weight + ' кг');
    return details;
  }
}
