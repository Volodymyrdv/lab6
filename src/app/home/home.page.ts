import { Component, OnInit } from '@angular/core';
import { ProductReadService } from '../services/productread/product-read.service';
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
    IonInput,
    IonLabel,
    IonRadioGroup,
    IonRadio,
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
  editFormNumber = 0;
  showDeleteForm = false;
  deleteFormNumber = 0;
  selectedValue = '';
  selectedTypes: ProductType[] = [];
  filteredProducts: IProduct[] = [];
  productTypes = productType;

  constructor(
    public productReadService: ProductReadService,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.productReadService.load();
    this.productReadService.searchProduct$.subscribe((products) => {
      this.filteredProducts = products;
    });
  }

  handleCheckboxChange(event: CustomEvent, productType: ProductType) {
    if (event.detail.checked) {
      this.selectedTypes.push(productType);
    } else {
      this.selectedTypes = this.selectedTypes.filter(
        (type) => type !== productType
      );
    }
    this.configService.setSelectedTypes(this.selectedTypes);
  }

  // Додати новий продукт
  addFormShow() {
    this.showAddForm = true;
  }

  addProduct($event: IProduct) {
    this.productReadService.addProduct($event);
    this.showAddForm = false;
  }

  // Редагувати продукт
  editFormShow(n: number) {
    this.editFormNumber = n;
    this.showEditForm = true;
  }

  editProduct($event: IProduct) {
    this.productReadService.editProduct($event);
    this.showEditForm = false;
  }

  // Видалити продукт
  deleteFormShow(n: number) {
    this.deleteFormNumber = n;
    this.showDeleteForm = true;
  }

  deleteProduct(n: number) {
    this.productReadService.deleteProduct(n);
    this.showDeleteForm = false;
  }

  cancelDelete() {
    this.showDeleteForm = false;
  }
}
