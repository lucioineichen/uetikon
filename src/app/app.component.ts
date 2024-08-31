import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sauf = '';
  saufen = [
    'Lüzli',
    'Yäne',
    'LX',
    'Pieti',
    'Sime',
    'Timmeli',
    'Schösche',
    'Lüzli',
    'Yäne',
    'LX',
    'Pieti',
    'Sime',
    'Timmeli',
    'Schösche',
    'Lüzli',
    'Yäne',
    'LX',
    'Pieti',
    'Sime',
    'Timmeli',
    'Schösche',
    'Pieti',
    'Pieti',
    'Pieti',
    'Pieti',
    'Pieti',
    'LX',
    'LX',
    'Sime',
    'Sime',
    'Yäne',
    'Yäne',
    'Timmeli',
    'Timmeli',
  ];

  changeSauf() {
    let newSauf = this.saufen[Math.floor(Math.random() * this.saufen.length)];
    while (newSauf == this.sauf) {
      newSauf = this.saufen[Math.floor(Math.random() * this.saufen.length)];
    }
    this.sauf = newSauf;
  }
}
