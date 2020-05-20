import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColdCoffeePageRoutingModule } from './cold-coffee-routing.module';

import { ColdCoffeePage } from './cold-coffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColdCoffeePageRoutingModule
  ],
  declarations: [ColdCoffeePage]
})
export class ColdCoffeePageModule {}
