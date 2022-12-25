import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Wine } from '../models/wine';
import { WineQuantityChange } from '../models/wine-quantity-change';

@Component({
  selector: 'app-winelist',
  template: `<app-wineitem [wine]="wine" (quantityChange)="onQuantityChange($event)" 
    *ngFor="let wine of wines"></app-wineitem>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WinelistComponent implements OnInit {

  public wines!: Wine[];
  constructor() {}

  ngOnInit() {
    this.wines = [
      {
        id: 1,
        name: "Protos Gran Reserva 2014",
        imageUrl: "assets/img/protos.png",
        price: 49.25,
        foodPairing: [
          {
            name: "Quesos",
            glutten: false,
            kcal: 500,
            vegan: false
          },
          {
            name: "Crudités",
            glutten: false,
            kcal: 100,
            vegan: true
          }
        ],
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 2,
        name: "Marqués de Murrieta",
        imageUrl: "assets/img/murrieta.png",
        price: 21.65,
        foodPairing: [
          {
            name: "Embutidos",
            glutten: false,
            kcal: 700,
            vegan: false
          },
          {
            name: "Encurtidos",
            glutten: false,
            kcal: 200,
            vegan: true
          }
        ],
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 3,
        name: "Matarromera",
        imageUrl: "assets/img/matarromera.png",
        price: 36.75,
        foodPairing: [
          {
            name: "Quesos",
            glutten: false,
            kcal: 500,
            vegan: false
          },
          {
            name: "Embutidos",
            glutten: false,
            kcal: 700,
            vegan: false
          },
        ],
        isOnSale: false,
        quantityInCart: 0
      },
      {
        id: 4,
        name: "Pago de Carraovejas",
        imageUrl: "assets/img/carraovejas.png",
        price: 34.50,
        foodPairing: [
          {
            name: "Embutidos",
            glutten: false,
            kcal: 700,
            vegan: false
          },
          {
            name: "Crudités",
            glutten: false,
            kcal: 100,
            vegan: true
          }
        ],
        isOnSale: false,
        quantityInCart: 0
      },
      {
        id: 5,
        name: "Hacienda Monasterio",
        imageUrl: "assets/img/monasterio.png",
        price: 61.90,
        foodPairing: [
          {
            name: "Encurtidos",
            glutten: false,
            kcal: 200,
            vegan: true
          },
          {
            name: "Crudités",
            glutten: false,
            kcal: 100,
            vegan: true
          }
        ],
        isOnSale: true,
        quantityInCart: 0
      }
    ]
  }

  onQuantityChange(change: WineQuantityChange) {
    const wine = this.wines.find(({ id }) => change.wine.id === id);
    wine!.quantityInCart += change.changeQuantity;
  }
}
