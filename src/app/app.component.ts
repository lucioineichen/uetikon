import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sauf = -1;
  saufen = [
    'Lüzli',
    'Pieti',
    'Yäne',
    'LX',
    'Sime',
    'Schösche',
    'Pancho',
    'Timmeli',
  ];

  changeSauf() {
    this.sauf = Math.floor(Math.random() * 8);
  }
}
