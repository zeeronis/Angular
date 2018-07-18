import { Component, OnInit } from '@angular/core';
import { ShopService, Product } from '../shop.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  currCategory = '';
  shopService: ShopService;

  constructor(shopService: ShopService) {
    this.shopService = shopService;
  }

  ngOnInit() {
  }

  changCatalog(event: MouseEvent) {
    this.currCategory = event.toElement.innerHTML;
  }
}
