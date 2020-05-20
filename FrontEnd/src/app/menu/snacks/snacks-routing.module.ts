import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnacksPage } from './snacks.page';

const routes: Routes = [
  {
    path: '',
    component: SnacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnacksPageRoutingModule {}
