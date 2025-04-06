import { IProduct } from '../interface/IProduct';
import { PremiumPackaging } from './PremiumPackaging';
import { SimplePackaging } from './SimplePackaging';
export class PackageFactory {
  static createPackage(product: IProduct, type: string) {
    switch (type) {
      case 'Simple':
        return new SimplePackaging(product);
      case 'Premium':
        return new PremiumPackaging(product);
      default:
        throw new Error('Unknown package type');
    }
  }
}
