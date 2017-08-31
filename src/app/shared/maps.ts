export class Maps {

  lat: number;
  lng: number;
  mapsCardTitle: string;
  directionsURL: String;

  constructor(lat: number, lng: number, mapsCardTitle: string, directionsURL: string ) {
    this.lat = lat;
    this.lng = lng;
    this.mapsCardTitle = mapsCardTitle;
    this.directionsURL = directionsURL;
  }
}
