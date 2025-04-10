import { Component, OnInit } from '@angular/core';
import { ProductReadService } from '../services/productread/product-read.service';
import { NgFor } from '@angular/common';
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
  ],
})
export class HomePage {
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
  ngOnInit() {
    this.productReadService.load();
  }
}
