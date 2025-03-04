import { Injectable } from '@angular/core';
import { concatMap, delay, Observable, of, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxService {

  constructor() {

    const delayed = delay(1000);
    const numbers = range(1, 10);
    
    let chain = numbers.pipe(
      concatMap(x => of(x).pipe(delayed))
    )

    chain.subscribe(data => console.log(data))

/*
    const foo = new Observable((subscriber) => {
      console.log('Hello');

      let i = 0
      setInterval(() => {
        subscriber.next(i++)
      }, 1000)

    });
     
    let subscription = foo.subscribe((x) => {
      console.log(x);
      if(x === 3) {
        subscription.unsubscribe()
      }
    });

    foo.subscribe((y) => {
      console.log(y);
    });
*/

  }
}
