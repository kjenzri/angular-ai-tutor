import { Component, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly id = this.route.snapshot.paramMap.get('id');
  private readonly recipeService = inject(Recipe);  
  readonly recipe = this.recipeService.getRecipes().find(r => r.id === Number(this.id));

  protected readonly serving = signal(1);

  protected readonly adjustedIngredients = computed(() => {
    const r = this.recipe;
    const s = this.serving();
    if (!r) return [];
    return r.ingredients.map(i => ({
      name: i.name,
      quantity: i.quantity * s,
      unit: i.unit,
    }));
  });

  protected increase(): void {
    this.serving.update(x => x + 1);
  }

  protected decrease(): void {
    this.serving.update(x => (x === 0 ? 0 : x - 1));
  }
}
