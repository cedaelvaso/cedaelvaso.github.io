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
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Edu",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Emi",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Fernando",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Gamby",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Garcy",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Hector",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Jorgito",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Juan",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Mario",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Rivas",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Rome",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Santy",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Soul",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Yimi",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Vitu",
      'assets/images/profile.png',
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
  ];

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

}
