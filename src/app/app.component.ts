import {Component} from '@angular/core';
import {Member} from "./shared/member";
import {Link} from "./shared/link";
import {Angulartics2GoogleAnalytics} from "angulartics2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Ceda el Vaso';
  inConstruction: boolean = true;
  memberList: Array<Member> = [
    new Member("Berto",
      'assets/img/profile-img/alberto-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Edu",
      'assets/img/profile-img/eduardo-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Emi",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Fernando",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Gamby",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Garcy",
      'assets/img/profile-img/garciparedes-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Hector",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Jorgito",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Juan",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Mario",
      'assets/img/profile-img/mario-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Rivas",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Rome",
      'assets/img/profile-img/romero-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Santy",
      'assets/img/profile-img/santiago-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Soul",
      'assets/img/profile-img/soul-profile.jpg',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Yimi",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Vitu",
      'assets/img/profile-img/default-profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
  ];

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

}
