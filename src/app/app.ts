import { Component, computed, signal } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RecipeList]
})
export class App {
  protected readonly title = signal('My Recipe Box');
}
