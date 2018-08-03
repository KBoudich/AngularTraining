import { Component, OnInit } from '@angular/core';
import { AmbientContext } from '../ambient.context';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { 
    AmbientContext.currentDataSource = 'fundamentals';
  }

  ngOnInit() {
  }

}
