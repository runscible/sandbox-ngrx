import {createAction, props} from '@ngrx/store';

export const edit = createAction(
                '[Edit Component] edit',
                props<{value: string}>());
