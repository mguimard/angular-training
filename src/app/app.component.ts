import { Component, inject } from '@angular/core';
import { RxService } from './rx.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title: string = 'my-app';

  rx = inject(RxService)

  foo() {
    let jedi1 = {
      color: 'blue',
      name: 'hobywhan',
    };

    let jedi2 = {
      color: 'green',
      name: 'luke',
    };

    let jedis = [jedi1, jedi2];

    let [{ name:name1, color:color1 }, { name:name2, color:color2 }] = jedis;


    console.log(name1);
    console.log(color1);

  }
}
