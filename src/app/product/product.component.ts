import { Component, OnInit, Input } from '@angular/core';
import { Product, ShopService } from '../shop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  shopService: ShopService;

  constructor( shopService_: ShopService) {
    this.shopService = shopService_;
  }

  ngOnInit() {
  }

  AddToCart() {
    this.shopService.AddProductInCart(this.product);
  }
}
