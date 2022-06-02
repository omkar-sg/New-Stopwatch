import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { watchComponent } from './watch.component';
import { WatchService } from './watch.service';

@NgModule({
  declarations: [
    AppComponent,watchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
