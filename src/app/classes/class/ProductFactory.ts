import { GiftSet } from './GiftSet';
import { Letter } from './Letter';
import { Souvenir } from './Souvenir';
import { IProduct } from '../interface/IProduct';
export class ProductFactory {
  static createProduct(data: any): IProduct {
    switch (data.type) {
      case 'GiftSet':
        return new GiftSet(
          data.id,
          data.name,
          data.price,
          data.itemCount,
          data.wieght
        );
      case 'Letter':
        return new Letter(data.id, data.name, data.price);
      case 'Souvenir':
        return new Souvenir(data.id, data.name, data.price, data.material!);
      default:
        throw new Error('Unknown product type');
    }
  }
}
