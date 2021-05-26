import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-bootstrap-ui',
  templateUrl: './bootstrap-ui.component.html',
  styleUrls: ['./bootstrap-ui.component.css']
})
export class BootstrapUiComponent implements OnInit {

  array: number[] = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {

    console.log('Array:' + _.isEmpty(this.array));


  }

}
