import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naviagtion-bar',
  templateUrl: './naviagtion-bar.component.html',
  styleUrls: ['./naviagtion-bar.component.css']
})
export class NaviagtionBarComponent implements OnInit {

  CurrPage: number;

  constructor() {
    this.CurrPage = 0;
  }

  ngOnInit() {}

  onSelect(value: number): void {
    this.CurrPage = value;
  }
}
