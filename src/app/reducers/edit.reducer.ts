import {createReducer, on} from '@ngrx/store';
import {edit} from '../actions/edit.action';

const initialState = 'initialState';




// tslint:disable-next-line:variable-name
const _editReducer = createReducer(
      initialState,
      // @ts-ignore
      on(edit, state => {
        state
        console.log(`state updated ${state}`);
      }));

export function editReducer(state, action) {
  return _editReducer(state, action);
}
