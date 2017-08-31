import {Component} from '@angular/core';
import {Member} from "./shared/member";
import {Link} from "./shared/link";
import {Angulartics2GoogleAnalytics} from "angulartics2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Ceda el Vaso';
  inConstruction: boolean = false;
  memberList: Array<Member> = [
    new Member("Berto",
      'assets/img/profile-img/alberto-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Edu",
      'assets/img/profile-img/eduardo-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Emi",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Fernando",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Gamby",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Garcy",
      'assets/img/profile-img/garciparedes-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://linkedin.com/in/garciparedes/en", "LinkedIn"),
        new Link("https://garciparedes.me", "Website", "home"),
      ], "Website"),
    new Member("Hector",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Jorgito",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Juan",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Mario",
      'assets/img/profile-img/mario-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Rivas",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Rome",
      'assets/img/profile-img/romero-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Santy",
      'assets/img/profile-img/santiago-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Soul",
      'assets/img/profile-img/soul-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Yimi",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
    new Member("Vitu",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
        new Link("https://twitter.com/garciparedes", "Twitter"),
      ]),
  ].sort(() => (Math.random() - 0.5));

  socialList: Array<Link> = [
    new Link("https://www.facebook.com/CedaElVasoPDN/", "Facebook"),
    new Link("https://twitter.com/cedaelvaso8", "Twitter")
  ];

  lat: number = 42.1527386;
  lng: number = -4.6927241;
  mapsCardTitle: string = "¿Cómo llegar?";
  directionsURL: string = "https://www.google.com/maps/dir/?api=1&destination=Paredes+de+Nava"

  authorName: string = "garciparedes";
  authorURL: string = "https://garciparedes.me";

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

}
