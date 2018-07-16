import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  numbers: any;

  constructor() {
    this.numbers = Array(52).fill(this.numbers, 0, 52).map((x, i) => i); // [0,1,2,3,4]
   }

  ngOnInit() {
  }

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


}
