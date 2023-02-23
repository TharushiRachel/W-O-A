import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-sub-group',
  templateUrl: './add-sub-group.component.html',
  styleUrls: ['./add-sub-group.component.scss']
})
export class AddSubGroupComponent implements OnInit {

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

}
