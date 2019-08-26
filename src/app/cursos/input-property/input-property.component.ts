import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inpty',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']//,
  //inputs: ['nameCourse:name']
})
export class InputPropertyComponent implements OnInit {

  @Input("name") nameCourse: string= '';

  constructor() { }

  ngOnInit() {
  }

}
