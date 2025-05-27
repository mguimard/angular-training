import { createAction, props } from '@ngrx/store';
import { User } from './user';

export const add = createAction('[Users Component] Add', 
  props<User>()
);

export const update = createAction('[Users Component] Update', 
  props<User>()
);

export const clear = createAction('[Users Component] Clear');