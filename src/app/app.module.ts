import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShopComponent } from './shop/shop.component';
import { GardeningComponent } from './gardening/gardening.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, MatTabsModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ShopComponent,
    GardeningComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
