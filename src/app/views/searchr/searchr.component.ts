import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/service/maps.service';

@Component({
  selector: 'app-searchr',
  templateUrl: './searchr.component.html',
  styleUrls: ['./searchr.component.css']
})
export class SearchrComponent implements OnInit {
  //I'm using dependency injection to be able to call the function that initializes the maps (MapsService) from my component
  constructor(private map : MapsService) { }

  ngOnInit(): void {
    this.map.initMap();
  }
  doGeocoging()
    {
      const adres = (<HTMLInputElement>document.getElementById('adresses')).value;
      this.map.geocoding(adres);
    }
}
