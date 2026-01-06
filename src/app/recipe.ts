import { Injectable } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  addRecipe(name: string) {
    MOCK_RECIPES.push({
      id: MOCK_RECIPES.length + 1, name, ingredients: [],
      description: '',
      imgUrl: '',
      isFavorite: false
    });
  }
  getRecipes() {
    return MOCK_RECIPES;
  }
}
