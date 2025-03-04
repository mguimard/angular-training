import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'sortTodos',
  standalone: false,
  pure: false // must not be pure
})
export class SortTodosPipe implements PipeTransform {

  transform(todos:Todo[]|null): Todo[] {
    if(todos === null){
      return []
    }
    let copy = [...todos]
    copy.sort((a,b) => a.completed?1:-1)
    return copy;
  }

}
