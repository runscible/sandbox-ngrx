import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {EDIT_TEXT,
        EDIT_FORM_1} from '../actions/edit.action';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent implements OnInit, OnDestroy {
  localValue: string;
  localState: any;
  localFormVal1: string;
  localFormVal2: string;
  localFormVal3: string;
  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.localState = this.store.pipe(select('adapter')).subscribe(val => {
      if (val) {
        this.localValue = val.textAdapter;
        this.localFormVal1 = val.dato1;
        this.localFormVal2 = val.dato2;
        this.localFormVal3 = val.dato3;
      }
    });
  }

  edit(val: any): void {
    this.store.dispatch({
      type: EDIT_TEXT,
      payload: val
    });
  }
  submitData(): void {
    this.store.dispatch({
      type: EDIT_FORM_1,
      payload: {
        dato1: this.localFormVal1,
        dato2: this.localFormVal2,
        dato3: this.localFormVal3
      }
    });
  }
  ngOnDestroy(): void {
    this.localState.unsubscribe();
  }
}
