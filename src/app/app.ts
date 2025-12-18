import { Component, signal } from '@angular/core';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly serving = signal(1);

  protected button1() {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected button2() {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected decrease() {
    this.serving.update(s => s == 0 ? 0 : --s);
  }
  protected increase() {
    this.serving.update(s => ++s);
  }
}
