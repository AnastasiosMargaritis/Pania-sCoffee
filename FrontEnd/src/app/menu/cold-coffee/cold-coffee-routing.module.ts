import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColdCoffeePage } from './cold-coffee.page';

const routes: Routes = [
  {
    path: '',
    component: ColdCoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColdCoffeePageRoutingModule {}
