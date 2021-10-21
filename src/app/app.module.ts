import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchrComponent } from './views/searchr/searchr.component';
import { WebsiteComponent } from './views/website/website.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import {NgxStripeModule } from "ngx-stripe";
import {NgxWebstorageModule} from 'ngx-webstorage';
import { CalendarComponent } from './views/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    SearchrComponent,
    WebsiteComponent,
    ReservationComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    GooglePlaceModule,
    NgxStripeModule.forRoot('pk_test_51IbmXgDHFVIVSFomcH3KsE2Oo1ofJFAjowTVbektCku0K91PjnTOfarXkC82nBMXLYGYUYZtiAursVeUajLlTMfY009K7T2PgM'),
    AgmCoreModule.forRoot({
      //the google maps key is required to be able to use the Google maps API
      apiKey: 'AIzaSyD2cPvVFGpXFhzNgEYoqrrGgZ-MW8ZDWQo'
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
