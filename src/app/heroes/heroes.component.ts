import { Component, OnInit } from '@angular/core';
import { BarState } from '../BarState';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() {    BarState.value = 1; }

  ngOnInit() {
  }

}
