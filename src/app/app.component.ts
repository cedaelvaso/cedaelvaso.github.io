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
    new Member("Sergio",
      [
        new Link("https://facebook.com/garciparedes", "Facebook"),
        new Link("https://instagram.com/garciparedes", "Instagram"),
      ]),
    new Member("Mario")];
}
