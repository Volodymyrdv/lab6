import { Component, OnInit } from '@angular/core';
import { ProductReadService } from '../services/productread/product-read.service';
import { NgFor, NgIf } from '@angular/common';
import { Packaging } from '../classes/class/Packaging';
import { PackageFactory } from '../classes/class/PackageFactory';
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
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

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
    NgFor,
    NgIf,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
  ],
})
export class HomePage {
  showAddForm: boolean = false;

  showEditForm: boolean = false;
  editFormNumber: number = 0;

  showDeleteForm: boolean = false;
  deleteFormNumber: number = 0;

  selectedValue: string = '';
  packages: Packaging[] = [];

  constructor(public productReadService: ProductReadService) {}

  handleChange(event: CustomEvent) {
    this.selectedValue = event.detail.value;
  }

  handleClick(n: any) {
    try {
      n = parseInt(n);
    } catch (error) {
      console.error('Error');
      return;
    }
    this.packages.push(
      PackageFactory.createPackage(
        this.productReadService.products[n - 1],
        this.selectedValue
      )
    );
    console.log(this.packages);
  }

  addFormShow() {
    this.showAddForm = true;
  }

  addProduct($event: any) {
    this.productReadService.addProduct($event);
    this.showAddForm = false;
  }

  editFormShow(n: number) {
    this.editFormNumber = n;
    this.showEditForm = true;
  }
  editProduct($event: any, n: number) {
    this.productReadService.products[n] = $event;
    this.showEditForm = false;
  }

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

  ngOnInit() {
    this.productReadService.load();
  }
}
