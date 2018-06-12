import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeComponent} from './recipe/recipe.component';
import {StrToArrayPipe} from './recipe/str-to-array.pipe';
import {RecipesComponent} from './recipes/recipes.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';
import { IngredientPipe } from './recipe/ingredient.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [
    RecipeComponent,
    StrToArrayPipe,
    RecipesComponent,
    RecipeCardComponent,
    IngredientPipe
  ]
})
export class RecipeModule { }
