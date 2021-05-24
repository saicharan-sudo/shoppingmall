import { Component } from '@angular/core';
import arrayWords from "./words"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingmall';
  // title = 'word-generator';
     constructor(){}

  words = '';
  limit = 10;

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
}
