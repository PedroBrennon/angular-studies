import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-onpty',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  outputs: ['changeValue']
})

export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changeValue = new EventEmitter();

  @ViewChild('inputField', null) valueFieldInput: ElementRef;

  increment(){
    this.valueFieldInput.nativeElement.value++;
    this.changeValue.emit({ newValue: this.value });
  }

  decrement(){
    this.valueFieldInput.nativeElement.value--;
    this.changeValue.emit({ newValue: this.value });
  }

  constructor() { }

  ngOnInit() {
  }

}
