import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService, Product } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from 'src/app/cart/cart.page';

@Component({
  selector: 'app-cold-coffee',
  templateUrl: './cold-coffee.page.html',
  styleUrls: ['./cold-coffee.page.scss'],
})
export class ColdCoffeePage implements OnInit {

  cart = [];
  cartItemCount: BehaviorSubject<number>;
  products= [];

  @ViewChild('cart',{static: false, read: ElementRef})fab: ElementRef;

  constructor(private service: CartService,
              private modal: ModalController) { }

  ngOnInit() {
    this.products = this.service.getProducts();
    this.cart = this.service.getCart();
    this.cartItemCount = this.service.getCartItemCount();
  }

  addToCart(p){
    this.animateCSS('tada');
    this.service.addProduct(p);
  }

  async openCart(){
    this.animateCSS('bounceOutLeft');
    let modal = await this.modal.create({
      component: CartPage,
      cssClass: 'cart-page'
    });

    modal.present();
  }

  animateCSS(animationName, keepAnimated= false){
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);

    function handleAnimationEnd(){
      if(!keepAnimated){
        node.classList.remove('animated', animationName)
      }

      node.removeEventListener('animationend', handleAnimationEnd);
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }

}
