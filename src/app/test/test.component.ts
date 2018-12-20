import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-test',
  template: `
    <input [(ngModel)] ="name" type="text"> 
    {{name}}
      `,

  styles: [`
  `]
})
export class TestComponent implements OnInit {

  public name="";


  constructor() { }

  logMessage(value){
    console.log(value)
  }



  ngOnInit() {
  }

}
