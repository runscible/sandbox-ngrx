import {createAction} from '@ngrx/store';

// aca hace un bind con el componente que lo va a usar ??? that's weird
// no, indica el tipo de accion que va a instanciarse dentro del reducer ...sigue siendo weird...

export const increment = createAction('[Adapter Component] increment' );
export const decrement = createAction('[Adapter Component] decrement' );
export const reset = createAction('[Adapter Component] reset' );



