import { Injectable } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  getRecipes() {
    return MOCK_RECIPES;
  }
}
