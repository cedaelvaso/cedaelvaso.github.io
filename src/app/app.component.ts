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
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Edu",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Emi",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Fernando",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Gamby",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Garcy",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Hector",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Jorgito",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Juan",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Mario",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Rivas",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Rome",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Santy",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Soul",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Yimi",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Vitu",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
  ];
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}

}
