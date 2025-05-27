import { Action, createReducer, on } from '@ngrx/store';
import { User } from './user';
import { add, clear, update } from './users.actions';

export const initialState = [
  {
    name: 'Bob',
    age: 20
  },
  {
    name: 'Alice',
    age: 21
  },
  {
    name: 'Felix',
    age: 22
  }
];

const _usersReducer = createReducer<User[], Action>(
  initialState,
  on(add, (previousUsers, newUser) => {
    return [...previousUsers, newUser];
  }),
  on(update, (state, props) => {
    const updatedUser = {
      name: props.name,
      age: props.age + 1
    }
    return state.map(u => {
      if (u.name === props.name) {
        return updatedUser;
      }
      return u;
    });
  }),
  on(clear, () => [])
);

export function usersReducer(state: User[] | undefined, action: Action) {
  return _usersReducer(state, action);
}
