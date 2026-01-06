import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.css',
})
export class RecipeForm {
  private readonly receipeService = inject(Recipe);
  private readonly formBuilder = inject(FormBuilder);
  protected readonly recipeForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  protected add(): void {
    if(this.recipeForm.valid) {
      const recipeName = this.recipeForm.get('name')?.value??'';
      console.log('Adding recipe:', recipeName);
      this.receipeService.addRecipe(recipeName);
      this.recipeForm.reset();
    }
  }
}
