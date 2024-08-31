import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sauf = -1;
  saufen = ['Lüzli', 'Yäne', 'LX', 'Pieti', 'Sime', 'Timmeli', 'Schösche'];

  changeSauf() {
    let newSauf = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 5);
    while (newSauf == this.sauf) {
      newSauf = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 5);
    }
    this.sauf = newSauf;
  }
}
