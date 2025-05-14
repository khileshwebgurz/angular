import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: any = 0;

  handleAdd(){
    this.counter += 1
  }
  handleMinus(){
    this.counter -= 1
  }
}
