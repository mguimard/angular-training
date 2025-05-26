import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import IFruit from './ifruit';

@Component({
  selector: 'app-fruit',
  imports: [CommonModule],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css',
})
export class FruitComponent implements OnInit, OnDestroy {
  @Input() fruit!: IFruit;
  @Output() removeRequest = new EventEmitter<void>();

  count = 0;
  interval;

  constructor() {
    this.interval = setInterval(() => {
      this.count++;
      console.log(this.count)
    }, 1000)
  }

  ngOnInit(): void {
    console.log('Whatever')
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('NgDestroy')
  }

}
