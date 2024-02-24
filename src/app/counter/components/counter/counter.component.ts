import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{counter}}</h3>
        <button (click)="increaseBy(5)">+5</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="decreaseBy()">-1</button>
    `
    
})
export class CounterComponent{
    constructor(){}

    public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value
  }

  decreaseBy():void{
    this.counter -= 1
  }

  resetCounter():void{
    this.counter = 10
  }
}