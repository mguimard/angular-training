import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { wrap } from 'comlink';

declare type MyWorkerFn = (arg: number) => number;

export interface PeriodicElement {
  name: string;
  position: number;
  weight: Promise<number>;
  symbol: string;
}

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
  imports: [MatTableModule, MatSortModule, CommonModule],
  standalone: true
})
export class AppComponent implements AfterViewInit, OnInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource();
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      const worker = new Worker(
        new URL('./code.worker', import.meta.url),
        { type: 'module' }
      );

      const proxy = wrap<MyWorkerFn>(worker);

      this.dataSource.data.push({
        position: i + 1,
        name: 'Element ' + (i + 1),
        weight: proxy(Math.random() + 1.0079),
        symbol: 'H'
      })
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}