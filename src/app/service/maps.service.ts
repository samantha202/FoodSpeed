import { Injectable,ViewChild } from '@angular/core';
import {GooglePlaceDirective } from "ngx-google-places-autocomplete";

var marker: any;

@Injectable({
  providedIn: 'root'
})
//this class will allow you to manage everything that is map, for example load the google maps map in our site, do the geocoding
export class MapsService {
@ViewChild('addresstext', {read:true, static:false}) addresstext: GooglePlaceDirective;
google: any ;
map: any;

  constructor() { }
  //this function will load the google maps map into our site
  initMap(){
    var latlng = new google.maps.LatLng(46.52863469527167,2.43896484375);
    var mapOptions = {
      zoom      : 6,
      center    : latlng,
      mapTypeId : google.maps.MapTypeId.ROADMAP,
    }
    const getElement = document.getElementById('mapp-canvas');
    if(getElement){
      this.map = new google.maps.Map(getElement, mapOptions);
    } 
  } 
}

