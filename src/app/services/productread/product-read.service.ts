import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/classes/interface/IProduct';
import { ProductFactory } from 'src/app/classes/class/ProductFactory';
import { ProductType } from 'src/app/classes/class/ProductName';
import { ConfigService } from '../configservice/configservice.service';
import { BehaviorSubject } from 'rxjs';

const API_URL = 'https://api.jsonbin.io/v3/b/680161658561e97a5001f18a';

@Injectable({
  providedIn: 'root',
})
export class ProductReadService {
  private products: IProduct[] = [];
  public searchProduct$ = new BehaviorSubject<IProduct[]>([]);

  constructor(private configService: ConfigService) {
    this.configService.selectedTypes$.subscribe((types) => {
      this.search(types);
    });
  }

  private search(types: ProductType[]) {
    if (types.length === 0) {
      this.searchProduct$.next([]);
    } else {
      const filtered = this.products.filter((product) =>
        types.includes(product.getType() as ProductType)
      );
      this.searchProduct$.next(filtered);
    }
  }

  public async load() {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      const data = json.record;

      this.products = data.map((item: any) =>
        ProductFactory.createProduct(item)
      );

      const selectedTypes = this.configService.selectedTypes$.getValue();
      this.search(selectedTypes);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  public addProduct(product: IProduct) {
    // product.setID(this.products.length + 1);
    // this.products.push(product);
    // this.search(this.configService.selectedTypes$.getValue());
  }

  public editProduct(product: IProduct) {
    const index = this.products.findIndex((p) => p.getID() === product.getID());
    if (index !== -1) {
      this.products[index] = product;
      this.search(this.configService.selectedTypes$.getValue());
    }
  }

  public deleteProduct(id: number) {
    // this.products = this.products.filter((product) => product.getID() !== id);
    // this.products.forEach((product, index) => product.setID(index + 1));
    // this.search(this.configService.selectedTypes$.getValue());
  }

  public getAllProducts(): IProduct[] {
    return [...this.products];
  }
}
