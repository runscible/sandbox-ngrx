import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AdapterModule } from './adapter/adapter.module';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule,
    FormsModule,
    StoreModule.forRoot({}),
    AdapterModule,
    StoreDevtoolsModule.instrument({
      maxAge: 15
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
