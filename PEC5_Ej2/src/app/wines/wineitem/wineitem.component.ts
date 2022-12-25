import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Wine } from '../../models/wine';
import { WineQuantityChange } from '../../models/wine-quantity-change';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WineitemComponent {

  @Input() public wine!: Wine;
  @Output() public quantityChange: EventEmitter<WineQuantityChange> = new EventEmitter();

  constructor() {}

  incrementUnitsCart() {
    this.quantityChange.emit({ wine: this.wine, changeQuantity: 1 });
  }

  decrementUnitsCart() {
    if (this.wine.quantityInCart > 0) {
      this.quantityChange.emit({ wine: this.wine, changeQuantity: -1 });
    }
  }
}
