import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HobbyListComponent } from './components/hobby-list/hobby-list.component';
import { HobbyDetailsComponent } from './components/hobby-details/hobby-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbyListComponent,
    HobbyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
