import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {AdapterComponent} from './adapter.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from '../reducers/edit.reducer';
import { OnsenModule } from 'ngx-onsenui';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


@NgModule({
  declarations: [AdapterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('adapter', reducer),
    OnsenModule,
    FormsModule,
    BrowserModule
  ],
  exports: [AdapterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdapterModule { }
