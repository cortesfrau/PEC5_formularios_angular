import { Component } from '@angular/core';
import { Wine } from "src/app/models/wine";

@Component({
  selector: 'app-winenew',
  templateUrl: './winenew.component.html',
  styleUrls: ['./winenew.component.css']
})
export class WinenewComponent {
  public message = "";
  constructor() {}

  createWine(wineForm: { invalid: any; value: { wine: Wine; }; }) {
    if (wineForm.invalid) {
      this.message = "Si us plau, corregeix les errades abans d'enviar el formulari.";
    } else {
      const wine: Wine = wineForm.value.wine;
      console.log("S'ha creat un nou vi!", wine);
    }
  }
}
