import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import bootstrap from "bootstrap";

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { GridComponent } from './grid/grid.component';
import { TypesettingComponent } from './typesetting/typesetting.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    GridComponent,
    TypesettingComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
