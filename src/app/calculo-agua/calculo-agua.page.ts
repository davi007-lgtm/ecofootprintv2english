import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonButtons
} from '@ionic/angular/standalone';

import { Router } from '@angular/router';

@Component({
  selector: 'app-calculo-agua',
  templateUrl: './calculo-agua.page.html',
  styleUrls: ['./calculo-agua.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonButton,
    IonButtons
  ]
})
export class CalculoAguaPage implements OnInit {

  consumoActual = 75;
  metaConsumo = 120;

  porcentaje = 0;
  strokeOffset = 314;

  constructor(private router: Router) {}

  ngOnInit() {
    this.actualizarMedidor();
  }

  actualizarMedidor() {

  // Aumenta consumo
  this.consumoActual += 5;

  // Evita pasar el límite
  if (this.consumoActual > this.metaConsumo) {
    this.consumoActual = this.metaConsumo;
  }

  // Calcula porcentaje
  this.porcentaje = Math.round(
    (this.consumoActual / this.metaConsumo) * 100
  );

  // Actualiza círculo
  const progress = (this.porcentaje / 100) * 314;

  this.strokeOffset = 314 - progress;
}

  botonVolver() {
    this.router.navigate(['/home']);
  }
}