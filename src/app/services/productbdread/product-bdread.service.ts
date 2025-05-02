import { Injectable } from '@angular/core';
import {
  Database,
  ref,
  set,
  push,
  update,
  remove,
  onValue,
} from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../classes/interface/IProduct';
import { ProductFactory } from '../../classes/class/ProductFactory';

@Injectable({
  providedIn: 'root',
})
export class ProductBDReadService {
  private productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private db: Database) {}

  fetchProducts(): void {
    const productsRef = ref(this.db, 'products');

    onValue(productsRef, (snapshot) => {
      const products: IProduct[] = [];
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        console.log('Data:', data);
        console.log('Key:', childSnapshot.key);
        const product = ProductFactory.createProduct({
          ...data,
          id: childSnapshot.key,
        });
        if (product) {
          products.push(product);
        }
      });
      this.productsSubject.next(products);
    });
  }

  addProduct(product: IProduct): void {
    const productsRef = ref(this.db, 'products');
    const newProductRef = push(productsRef);
    set(newProductRef, {
      ...product,
      id: newProductRef.key,
      type: product.getType(),
    });
  }

  editProduct(updateProduct: IProduct): void {
    const productRef = ref(this.db, `products/${updateProduct.getID()}`);
    update(productRef, updateProduct);
  }

  deleteProduct(productId: string): void {
    const productRef = ref(this.db, `products/${productId}`);
    remove(productRef);
  }
}
