import { GiftSet } from './GiftSet';
import { Letter } from './Letter';
import { Souvenir } from './Souvenir';
import { Book } from './Book';
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
          data.weight
        );
      case 'Letter':
        return new Letter(data.id, data.name, data.price);
      case 'Souvenir':
        return new Souvenir(data.id, data.name, data.price, data.material!);
      case 'Book':
        return new Book(
          data.id,
          data.name,
          data.price,
          data.author,
          data.pages
        );
      default:
        throw new Error('Unknown product type');
    }
  }
}
