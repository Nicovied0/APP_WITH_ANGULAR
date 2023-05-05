import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-and-nav',
  templateUrl: './title-and-nav.component.html',
  styleUrls: ['./title-and-nav.component.css']
})

export class TitleAndNavComponent {

  constructor(private router: Router) { }

  goDetails() {
    this.router.navigate(['/details'])
  }
  goHome() {
    this.router.navigate(['/'])
  }

}
