import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemberGridComponent } from './member-grid/member-grid.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { DescriptionComponent } from './description/description.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContainerComponent } from './shared/main-container/main-container.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
