import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
  imports: [RecipeDetail]
})
export class RecipeList {
  protected readonly activeRecipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly serving = signal(1);

  protected readonly adjustedIngredients = computed(() => {
    const currentRecipe = this.activeRecipe();
    const currentServing = this.serving();
    return currentRecipe.ingredients.map(ingredient => ({
      name: ingredient.name,
      quantity: ingredient.quantity * currentServing,
      unit: ingredient.unit
    }));
  });

  protected selectFirst(): void {
    this.activeRecipe.set(MOCK_RECIPES[0]);
  }
  protected selectSecond(): void {
    this.activeRecipe.set(MOCK_RECIPES[1]);
  }

  protected decrease(): void {
    this.serving.update(s => s === 0 ? 0 : s - 1);
  }
  protected increase(): void {
    this.serving.update(s => s + 1);
  }
}