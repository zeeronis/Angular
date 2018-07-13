import { Component, OnInit } from '@angular/core';
import { BarState } from '../BarState';

@Component({
  selector: 'app-naviagtion-bar',
  templateUrl: './naviagtion-bar.component.html',
  styleUrls: ['./naviagtion-bar.component.css']
})



export class NaviagtionBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  GetState(): number {
      return BarState.value;
  }
}




