import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineitemComponent } from './wines/wineitem/wineitem.component';
import { WinelistComponent } from './wines/winelist/winelist.component';
import { WinenewComponent } from './wines/winenew/winenew.component';

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent,
    WinenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
