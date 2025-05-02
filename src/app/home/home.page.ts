import { Component, OnInit } from '@angular/core';
// import { ProductReadService } from '../services/productread/product-read.service';
import { ProductBDReadService } from '../services/productbdread/product-bdread.service';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonButton,
  IonItem,
  IonTitle,
  IonInput,
  IonLabel,
  IonContent,
  IonRadioGroup,
  IonRadio,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { productType, ProductType } from '../classes/class/ProductName';
import { ConfigService } from '../services/configservice/configservice.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../classes/interface/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonTitle,
    IonContent,
    MyHeaderComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonButton,
    IonItem,
    IonLabel,
    IonCheckbox,
    CommonModule,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
  ],
})
export class HomePage implements OnInit {
  showAddForm = false;
  showEditForm = false;
  showDeleteForm = false;

  editFormNumber = '';
  deleteFormNumber = '';

  selectedTypes: ProductType[] = [];
  filteredProducts: IProduct[] = [];
  productTypes = productType;

  constructor(
    private productService: ProductBDReadService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.productService.products$.subscribe((products) => {
      this.filteredProducts = products;
    });
    this.productService.fetchProducts();
  }

  // handleCheckboxChange(event: CustomEvent, productType: ProductType) {
  //   if (event.detail.checked) {
  //     this.selectedTypes.push(productType);
  //   } else {
  //     this.selectedTypes = this.selectedTypes.filter(
  //       (type) => type !== productType
  //     );
  //   }
  //   this.configService.setSelectedTypes(this.selectedTypes);
  // }

  // Додати новий продукт
  addFormShow() {
    this.showAddForm = true;
  }

  addProduct($event: any) {
    this.productService.addProduct($event);
    this.showAddForm = false;
  }

  // Редагувати продукт
  editFormShow(n: string) {
    this.editFormNumber = n;
    this.showEditForm = true;
  }

  editProduct($event: any) {
    this.productService.editProduct($event);
    this.showEditForm = false;
  }

  // Видалити продукт
  deleteFormShow(n: string) {
    this.deleteFormNumber = n;
    this.showDeleteForm = true;
  }

  deleteProduct(n: string) {
    this.productService.deleteProduct(n);
    this.showDeleteForm = false;
  }

  cancelDelete() {
    this.showDeleteForm = false;
  }
}
