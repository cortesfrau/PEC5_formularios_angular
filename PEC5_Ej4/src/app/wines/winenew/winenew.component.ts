import { Component } from '@angular/core';
import { Wine } from 'src/app/models/wine';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { wineNameValidator } from 'src/app/validators/winename-validator';

@Component({
  selector: 'app-winenew',
  templateUrl: './winenew.component.html',
  styleUrls: ['./winenew.component.css']
})
export class WinenewComponent {
  public message = "";
  public wineForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: ["", [Validators.required, wineNameValidator()]],
      price: [0, [Validators.required, Validators.min(1)]],
      imgURL: [
        "",
        [
          Validators.required,
          Validators.pattern("^http(s?)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(/S*)?$")
        ]
      ],
      isOnSale: false
    });
  }

  createWine() {
    if (this.wineForm.invalid) {
      this.message = "Si us plau, corregeix les errades abans d'enviar el formulari.";
    } else {
      const wine: Wine = this.wineForm.value;
      console.log("S'ha creat un nou vi!", wine);
    }
  }
}
