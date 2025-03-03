import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  standalone: false
})
export class CounterComponent implements OnInit, OnDestroy {
  count = 0;

  timerId;

  constructor(){

    console.log('constructor')

    this.timerId = setInterval(() => {
      this.count ++
      console.log('TICK', this.count)
    }, 1000)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    clearInterval(this.timerId)
  }

}
