import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Recipe Box');

  protected button1() {
    console.log("Button 1 Clicked!!");
  }

  protected button2() {
    console.log("Button 2 Clicked!!");
  }
}
