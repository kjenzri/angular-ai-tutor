import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecipeModel } from '../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
  imports: [FormsModule, RecipeDetail]
})
export class RecipeList {
  private readonly recipeService = inject(Recipe);
  protected readonly activeRecipe = signal<RecipeModel>(this.recipeService.getRecipes()[0]);
  protected readonly serving = signal(1);
  protected readonly searchTerm = signal('');
  protected readonly filteredReceipes = computed<RecipeModel[]>(() => {
    return this.recipeService
      .getRecipes()
      .filter(recipe => 
        recipe.name.toLowerCase()
          .includes(this.searchTerm().toLowerCase()));
  });

  protected readonly adjustedIngredients = computed(() => {
    const currentRecipe = this.activeRecipe();
    const currentServing = this.serving();
    return currentRecipe.ingredients.map(ingredient => ({
      name: ingredient.name,
      quantity: ingredient.quantity * currentServing,
      unit: ingredient.unit
    }));
  });

  protected select(index: number): void {
    this.activeRecipe.set(this.filteredReceipes()[index]);
  }

  protected decrease(): void {
    this.serving.update(s => s === 0 ? 0 : s - 1);
  }
  protected increase(): void {
    this.serving.update(s => s + 1);
  }
}