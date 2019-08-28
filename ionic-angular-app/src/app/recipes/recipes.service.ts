import { Injectable } from '@angular/core';
import { RecipeDetailPage } from './recipe-detail/recipe-detail.page';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://live.staticflickr.com/8451/7903260278_4b0434582d_m.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }, 
    {
      id: 'r2',
      title: 'Lasagna',
      imageUrl: 'https://live.staticflickr.com/794/27536596138_a201bb3cb3_m.jpg',
      ingredients: ['Cheese', 'Tomatoes', 'Meat']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

}


