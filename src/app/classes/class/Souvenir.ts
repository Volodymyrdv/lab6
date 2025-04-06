import { Product } from './Product';
export class Souvenir extends Product {
  private material: string;
  constructor(id: number, name: string, price: number, material: string) {
    super(id, name, price);
    this.material = material;
  }
  getMaterial(): string {
    return this.material;
  }

  override getType(): string {
    return 'Souvenir';
  }

  override getDetails(): string[] {
    let details = [];
    details.push('Матеріал: ' + this.material);
    return details;
  }
}
