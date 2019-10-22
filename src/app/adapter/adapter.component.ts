import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {increment, decrement, reset} from '../actions/adapter.action';
import {edit} from '../actions/edit.action';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent implements OnInit {
  number$: Observable<number>;
  text$: Observable<string>;
  constructor(private store: Store<{counter: number}>) {
    this.number$ = store.pipe(select('adapter'));
    this.text$ = store.pipe(select('edit'));
  }

  ngOnInit() {}
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
  edit(val: string) {
    this.store.dispatch(edit(val));
  }
}
