import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Recipe} from './recipe.model';
import {HttpClient} from '@angular/common/http';
import {RECIPES} from './recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _baseUrl = 'http://10.0.1.55:8080/api/v1/recipes';

  constructor(private httpClient: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
    //return this.httpClient.get<Recipe[]>(this._baseUrl);
  }

  getRecipe(id: string): Observable<Recipe> {
    return of(RECIPES[Number.parseInt(id)]);
    //return this.httpClient.get<Recipe>(this._baseUrl + '/' + id);
  }
}
