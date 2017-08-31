import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {
  }

  lat: number = 42.1527386;
  lng: number = -4.6927241;
  mapTitle: string = "¿Cómo llegar?";
  directionsUrl: string = "https://www.google.com/maps/dir/?api=1&destination=Paredes+de+Nava"

  ngOnInit() {
  }

}
