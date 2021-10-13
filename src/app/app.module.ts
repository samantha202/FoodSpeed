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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    SearchrComponent,
    WebsiteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      //the google maps key is required to be able to use the Google maps API
      apiKey: 'AIzaSyD2cPvVFGpXFhzNgEYoqrrGgZ-MW8ZDWQo'
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
