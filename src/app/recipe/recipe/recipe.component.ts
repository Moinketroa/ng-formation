import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Route, RouterLink} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  more: boolean;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    this.more = false;
  }

  ngOnInit() {
    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')).subscribe(recipe => this.recipe = recipe);
  }

  showMore(): void {
    this.more = !this.more;
  }
}
