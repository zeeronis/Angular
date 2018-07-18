import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  shopService: ShopService;

  constructor(shopService: ShopService) {
    this.shopService = shopService;
  }

  Remove(event: MouseEvent) {
    this.shopService.RemoveProductInCartByID(+event.srcElement.id);
  }

  ChangeAmount(event) {
    console.log(event);
    this.shopService.SetAmountForCartProductByID(+event.srcElement.id, +event.srcElement.value);
  }

  getTotal(): number {
    let total = 0;
    this.shopService.GetProductsInCart().forEach(item => {
      total += item.amount * item.product.cost;
    });
    return total;
  }
}
