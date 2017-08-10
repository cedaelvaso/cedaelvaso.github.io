import {Component} from '@angular/core';
import {Member} from "./shared/member";
import {Link} from "./shared/link";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  memberList: Array<Member> = [
    new Member("Berto"),
    new Member("Edu"),
    new Member("Emi"),
    new Member("Fernando"),
    new Member("Gamby"),
    new Member("Garcy",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Hector"),
    new Member("Jorgito"),
    new Member("Juan"),
    new Member("Mario"),
    new Member("Rivas"),
    new Member("Rome"),
    new Member("Santy"),
    new Member("Soul"),
    new Member("Yimi"),
    new Member("Vitu"),
  ];
}
