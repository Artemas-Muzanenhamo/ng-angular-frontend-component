import {Component} from '@angular/core';
import {Item} from './item';


@Component({
  selector: 'app-basket-form',
  templateUrl: 'basket.component.html'
})
export class BasketComponent {

  model = new Item('dog', 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');

  submitted = false;

  onSubmit() {this.submitted = true};

  // TO DO: Remove this when we are done...
  get diagnostic() { return JSON.stringify(this.model); }
}
