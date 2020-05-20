import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotCoffeePage } from './hot-coffee.page';

const routes: Routes = [
  {
    path: '',
    component: HotCoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotCoffeePageRoutingModule {}
