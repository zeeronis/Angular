import { Component, OnInit } from '@angular/core';
import { BarState } from '../BarState';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {  BarState.value = 0; }

  ngOnInit() {
  }

}
