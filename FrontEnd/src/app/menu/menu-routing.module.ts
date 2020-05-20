import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'cold-coffee',
    loadChildren: () => import('./cold-coffee/cold-coffee.module').then( m => m.ColdCoffeePageModule)
  },
  {
    path: 'hot-coffee',
    loadChildren: () => import('./hot-coffee/hot-coffee.module').then( m => m.HotCoffeePageModule)
  },
  {
    path: 'snacks',
    loadChildren: () => import('./snacks/snacks.module').then( m => m.SnacksPageModule)
  },
  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module').then( m => m.DrinksPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
