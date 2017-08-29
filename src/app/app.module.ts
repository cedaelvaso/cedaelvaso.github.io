import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {MdButtonModule, MdCardModule, MdGridListModule, MdToolbarModule} from "@angular/material";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemberGridComponent } from './member-grid/member-grid.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { DescriptionComponent } from './description/description.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContainerComponent } from './shared/main-container/main-container.component';
import {Angulartics2GoogleAnalytics, Angulartics2Module} from "angulartics2";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberGridComponent,
    MemberDetailComponent,
    DescriptionComponent,
    MapComponent,
    ContactComponent,
    ToolbarComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
