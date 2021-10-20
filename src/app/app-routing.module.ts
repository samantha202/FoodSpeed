import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {SearchrComponent} from './views/searchr/searchr.component';
import {WebsiteComponent} from './views/website/website.component';
import {ReservationComponent} from './views/reservation/reservation.component';

const routes: Routes = [
  { path: 'home',  component:HomeComponent },
  { path: 'search',  component:SearchrComponent},
  { path: 'website',  component:WebsiteComponent},
  { path: 'reservation',  component:ReservationComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
