import { Component, input, signal, computed } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  readonly recipe = input<RecipeModel>();

  protected readonly serving = signal(1);

  protected readonly adjustedIngredients = computed(() => {
    const r = this.recipe();
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
