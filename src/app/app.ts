import { Component, computed, signal } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet]
})
export class App {
  protected readonly title = signal('My Recipe Box');
}
