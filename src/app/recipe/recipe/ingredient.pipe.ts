import { Pipe, PipeTransform } from '@angular/core';
import {Ingredient} from '../ingredient.model';

@Pipe({
  name: 'ingredientFormater'
})
export class IngredientPipe implements PipeTransform {

  transform(value: Ingredient, args?: any): string {
    let result: string;

    if (value.name.trim() === '') {
      result = 'No valid name was provided for this ingredient.';
    } else if (value.quantity <= 0 || value.unit.trim() === '') {
      result = value.name + ' : No quantity nor unit specified.';
    } else {
      result = value.name + ' : ' + value.quantity + value.unit;
    }

    return result;
  }

}
