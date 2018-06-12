import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  more: boolean;

  constructor() {
    this.more = false;
  }

  ngOnInit() {
  }

  showMore(): void {
    this.more = !this.more;
  }
}
