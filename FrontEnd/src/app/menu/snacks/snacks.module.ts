import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnacksPageRoutingModule } from './snacks-routing.module';

import { SnacksPage } from './snacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnacksPageRoutingModule
  ],
  declarations: [SnacksPage]
})
export class SnacksPageModule {}
