import { Component, OnInit } from '@angular/core';
import { BarState } from '../BarState';

@Component({
  selector: 'app-altar',
  templateUrl: './altar.component.html',
  styleUrls: ['./altar.component.css']
})
export class AltarComponent implements OnInit {

  constructor() {    BarState.value = 2; }

  ngOnInit() {
  }

}
