import { Component, OnInit } from '@angular/core';
import {Goal} from './goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goal: any[];

  constructor() {
    this.goal = [
      new Goal(2,'Buy Cookies'),
      new Goal(3, 'Get new Phone Case'),
      new Goal(4, 'Get Dog Food'),
      new Goal(5, 'Solve math homework'),
      new Goal(6, 'Plot my world domination plan'),
          ];

  }
  ngOnInit() {
  }

}
