import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeComponent} from './recipe/recipe.component';
import {StrToArrayPipe} from './recipe/str-to-array.pipe';
import {RecipesComponent} from './recipes/recipes.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    RecipeComponent,
    StrToArrayPipe,
    RecipesComponent
  ]
})
export class RecipeModule { }
