import { Component, OnInit } from '@angular/core';
import { AmbientContext } from '../ambient.context';

@Component({
  selector: 'app-advanced-training',
  templateUrl: './advanced-training.component.html',
  styleUrls: ['./advanced-training.component.css']
})
export class AdvancedTrainingComponent implements OnInit {

  constructor() {
    AmbientContext.currentDataSource = 'advanced';
   }

  ngOnInit() {
  }

}
