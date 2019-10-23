import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from '../actions/adapter.action';


// export const initialState = 0;

// // tslint:disable-next-line:variable-name
// const _adapterReducer = createReducer(initialState,
//     on(increment, state => state + 1),
//     on(decrement, state => state - 1),
//     on(reset, state => 0),
//   );

// export function adapterReducer(state, action) {
//    return _adapterReducer(state, action);
// }
