import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationManagerMaterialModule } from './location-manager.angular-material.module';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NodeManagerModule } from './node-manager/node-manager.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NodeManagerModule,
    // LocationManagerMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
