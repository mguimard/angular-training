import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'completedCount',
  standalone: false,
  pure: false
})
export class CompletedCountPipe implements PipeTransform {

  transform(todos:Todo[]|null): number {
    console.log('Pipe execution')

    if(todos === null){
      console.log('todos is null')
      return 0;
    }

    return todos.filter(t => t.completed).length;
  }

}
