import {EDIT_TEXT,
        EDIT_FORM_1} from '../actions/edit.action';
import {State} from '../model/State';

const deafultState = {
  textAdapter: 'default textAdapter',
  formulario1: {
    dato1: 'default_dato_1',
    dato2: 'default_dato_2',
    dato3: 'default_dato_3'
  }
}
export function reducer(state: State, action): State {
    switch(action.type) {
      case EDIT_TEXT:
        return {
          ...state,
          textAdapter: action.payload
        };
     case EDIT_FORM_1:
       console.log(`el valor recibido es ${JSON.stringify(action.payload)}`);
       return {
         ...state,
         formulario1: action.payload
       }
      default:
        return state;
    }
 }
