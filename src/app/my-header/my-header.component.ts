import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
  standalone: true,
  imports: [IonButtons, IonHeader, IonToolbar, IonTitle],
})
export class MyHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
