import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipe/recipes/recipes.component';
import {RecipeModule} from './recipe/recipe.module';
import {RecipeComponent} from './recipe/recipe/recipe.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  },
  {
    path: '**',
    redirectTo: 'recipes'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RecipeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
