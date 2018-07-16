import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.css']
})
export class NavigateBarComponent implements OnInit {

  private router: any = [];
  constructor(private router_: Router) {
    this.router = router_;
    for (let index = 0; index < this.router.config; index++) {
      console.log('log:' + this.router.config[index]);
    }
  }

  ngOnInit() {
  }

}
