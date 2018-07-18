import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.css']
})
export class NavigateBarComponent implements OnInit {

  route: any;

  constructor(private route_: Router) {
    this.route = route_;
  }

  ngOnInit() {
  }

  GetTabs():  Array<Routes> {
    const arr: Array<Routes> = new Array<Routes>();
    for (let index = 0; index < 3; index++) {
      arr.push(this.route.config[index]);
    }
    return arr;
  }

}
