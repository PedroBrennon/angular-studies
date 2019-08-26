import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://ibm.com';
  cursoAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com/output/nature-q-c-400-200-3.jpg';
  actualValue: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false;
  name: string = 'abc';
  person: any = {
    name: 'Jose',
    age: '20'
  };
  nameCourse: string = 'Angular';
  initialValue: number = 10;

  constructor() { }

  ngOnInit() {
  }

  getValue(){
    return 5;
  }

  onChangeValue(event){
    console.log(event);
  }

  buttonClicked(){
    alert("Button clicked!");
  }

  onKeyUp(event: KeyboardEvent){
    var eventValue = (<HTMLInputElement>event.target).value;
    console.log(eventValue);
    this.actualValue = eventValue;
  }

  saveValue(eventVal: string){
    this.savedValue = eventVal;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
