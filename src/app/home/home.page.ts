import { Component, OnInit } from '@angular/core';
import { ProductReadService } from '../services/productread/product-read.service';
import { NgFor } from '@angular/common';
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
    NgFor,
  ],
})
export class HomePage {
  constructor(public productReadService: ProductReadService) {}

  ngOnInit() {
    this.productReadService.load();
  }
}
