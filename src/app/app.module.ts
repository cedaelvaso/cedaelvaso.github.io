import 'hammerjs';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdGridListModule, MdToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MemberGridComponent} from './member-grid/member-grid.component';
import {MemberDetailComponent} from './member-detail/member-detail.component';
import {DescriptionComponent} from './description/description.component';
import {MapComponent} from './map/map.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MainContainerComponent} from './shared/main-container/main-container.component';
import {Angulartics2GoogleAnalytics, Angulartics2Module} from 'angulartics2';
import {RouterModule} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome/angular-font-awesome';
import {SocialComponent} from './social/social.component';
import {AgmCoreModule} from '@agm/core';
import {FooterComponent} from './footer/footer.component';
import {AppService} from './app.service';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberGridComponent,
    MemberDetailComponent,
    DescriptionComponent,
    MapComponent,
    ToolbarComponent,
    MainContainerComponent,
    SocialComponent,
    FooterComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([]),
    NoopAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcHBzgvSOZPDzLtywbJ7anG9qwdHAft0U',
    }),
    NgbModule.forRoot(),
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
