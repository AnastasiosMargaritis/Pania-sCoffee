import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Product{
  constructor(public id: number, 
              public name: string,
              public price: number,
              public tag: string,
              public amount: number){}
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    new Product( 1,'Freddo Espresso', 1.30, 'cold', 1),
    new Product( 2,'Freddo Cappucino',1.50, 'cold',  1),
    new Product( 3,'Latte',1.80, 'cold',  1),
    new Product( 4,'Tea',1.30, 'hot',  1),
  ]

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product){
    let added = false;

    for(let p of this.cart){
      if(p.id === product.id){
        p.amount += 1;
        added = true;
        break;
      }
    }

    if(!added){
      this.cart.push(product);
    }

    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product){
    for(let[index, p] of this.cart.entries()){
      if(p.id === product.id){
        p.amount -= 1;

        if(p.amount == 0){
          this.cart.splice(index, 1);
        }
      }
    }

    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product){
    for(let [index,p] of this.cart.entries()){
      if(p.id === product.id){
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
