import { Product } from './Product';

export class GiftSet extends Product {
  private itemCount: number;
  private wieght: number;
  constructor(
    id: number,
    name: string,
    price: number,
    itemCount: number,
    wieght: number
  ) {
    super(id, name, price);
    this.itemCount = itemCount;
    this.wieght = wieght;
  }
  getItemCount(): number {
    return this.itemCount;
  }

  getWeight(): number {
    return this.wieght;
  }

  override getType(): string {
    return 'GiftSet';
  }

  override getDetails(): string[] {
    let details = [];
    details.push('Кількість товарів: ' + this.itemCount);
    details.push('Вага: ' + this.wieght + ' кг');
    return details;
  }
}
