import { Injectable } from '@angular/core';

interface Cart {
  product: Product;
  amount: number;
}



@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private ID = 0;
  private ShopList: Array<Category> = new Array<Category>();
  private UserCart: Array<Cart> = new Array<Cart>();

   // test items
  private categoryNames: string[] = ['Bags', 'Clothing', 'Shoes', 'Accessories'];
  private ItemNames: string[] = ['Random', 'Some member', 'Nature', 'chloe here' ];
  // end test items. //!delete in release version!//

  constructor() {
    for (let index = 0; index < this.categoryNames.length; index++) { // auto-generate items for test
      this.ShopList.push(new Category(this.categoryNames[index]));
     for (let index2 = 0; index2 < this.randomInt(10, 30); index2++) {
      this.ShopList[index].products.push(
        new Product(this.ItemNames[this.randomInt(0, 3)], this.GetRndImg(), this.randomInt(5, 200), this.GetId()));
     }
    }
  }

  private GetId() {
    this.ID++;
    return this.ID;
  }

  AddProductInCart(product: Product) {
    for (let index = 0; index < this.UserCart.length; index++) {
      if (this.UserCart[index].product.id === product.id) {
        this.UserCart[index].amount++;
        return;
      }
    }
    this.UserCart.push({product: product, amount: 1});
  }

  RemoveProductInCartByID(ID: number) {
    for (let index = 0; index < this.UserCart.length; index++) {
      if (this.UserCart[index].product.id === ID) {
        this.UserCart.splice(index, 1);
        return;
      }
    }
  }

  SetAmountForCartProductByID(ID: number, amount: number) {
    for (let index = 0; index < this.UserCart.length; index++) {
      if (this.UserCart[index].product.id === ID) {
        this.UserCart[index].amount = amount;
        return;
      }
    }
  }

  GetProductsInCart(): Array<Cart> {
    return this.UserCart;
  }

  GetProductByID(ID: number): Product {
    for (let index = 0; index < this.ShopList.length; index++) {
      for (let index2 = 0; index < this.ShopList[index].products.length; index2++) {
        if (this.ShopList[index].products[index2].id === ID) {
          return this.ShopList[index].products[index2];
        }
      }
    }
    return null;
  }

  GetProductsByIDs(IDs: Array<number>): Array<Product> {
    console.log(this.ShopList);
    if (this.UserCart.length < 1) {
      return new Array<Product>();
    }

    const products: Array<Product> = new Array<Product>();
    for (let index = 0; index < this.ShopList.length; index++) {
      for (let index2 = 0; index < this.ShopList[index].products.length; index2++) {
        for (let index3 = 0; index < IDs.length; index3++) {
          if (this.ShopList[index].products[index2].id === IDs[index3]) {
            console.log('if-true');
            products.push(this.ShopList[index].products[index2]);
            IDs.splice(index3, 1);
            index3--;
          }
        }
      }
    }
    return products;
  }

  GetCategories(): Array<string>  {
    const arr: Array<string> = new Array<string>();
    for (let index = 0; index < this.ShopList.length; index++) {
      arr.push(this.ShopList[index].name);
    }
    return arr;
  }

  GetProductsByCategory(categoryName: string): Array<Product> {
    for (let index = 0; index < this.ShopList.length; index++) {
      if (this.ShopList[index].name === categoryName) {
        return this.ShopList[index].products;
      }
    }
    return new Array<Product>();
  }

  GetProductsByName() {
    // ... so lazy method
  }

  AddProduct(name: string, imgSource: string, cost: number, categoryName: string) {
    for (let index = 0; index < this.ShopList.length; index++) {
        if (this.ShopList[index].name === categoryName) {
          this.ShopList[index].products.push(new Product(name, imgSource, cost, this.GetId()));
          return;
        }
    }
    const category: Category = new Category(categoryName);
    category.products.push(new Product(name, imgSource, cost, this.GetId()));
    this.ShopList.push(category);
  }



  // start test funcs  //!delete in release version!//
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  GetRndImg(): string {
    let imgStr;

    switch (this.randomInt(0, 3)) {
      case 0:
      imgStr = 'https://biblicalwholenesscom.files.wordpress.com/2017/06/bigstock-autumn-fall-scene-beautiful-148858499.jpg?w=1200';
        break;
        case 1:
        // tslint:disable-next-line:max-line-length
        imgStr = 'https://media.istockphoto.com/photos/beautiful-nature-at-morning-in-misty-spring-forest-with-sun-picture-id506856658?k=6&m=506856658&s=612x612&w=0&h=GWvZGpApXiPXu2AtRX8YZe75-DkZIf6HVqHJuAKCTHk=';
          break;
          case 2:
          // tslint:disable-next-line:max-line-length
          imgStr = 'http://zcdn.edu.pl/wp-content/uploads/2017/11/parki-krajobrazowe.jpg';
            break;
            case 3:
            imgStr = 'https://i.ytimg.com/vi/tLu7EfIuiX8/maxresdefault.jpg';
              break;
    }
    return imgStr;
  }
  // end test funcs. //!delete in release version!//

}

export class Category {
  name: string;
  products: Array<Product> = new Array<Product>();

  constructor(name: string) {
    this.name = name;
  }
}

export class Product {
  id: number;
  name: string;
  imgSource: string;
  cost: number;

  constructor (name: string, imgSource: string, cost: number, id: number) {
    this.id = id;
    this.name = name;
    this.imgSource = imgSource;
    this.cost = cost;
  }
}
