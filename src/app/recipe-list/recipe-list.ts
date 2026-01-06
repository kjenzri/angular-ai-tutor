import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecipeModel } from '../models';
import { Recipe } from '../recipe';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
  imports: [FormsModule, RouterLink]
})
export class RecipeList {
  private readonly recipeService = inject(Recipe); 
  protected readonly searchTerm = signal('');
  protected readonly filteredReceipes = computed<RecipeModel[]>(() => {
    return this.recipeService
      .getRecipes()
      .filter(recipe => 
        recipe.name.toLowerCase()
          .includes(this.searchTerm().toLowerCase()));
  });
}