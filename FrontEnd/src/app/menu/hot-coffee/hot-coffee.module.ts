import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotCoffeePageRoutingModule } from './hot-coffee-routing.module';

import { HotCoffeePage } from './hot-coffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotCoffeePageRoutingModule
  ],
  declarations: [HotCoffeePage]
})
export class HotCoffeePageModule {}
