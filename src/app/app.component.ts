import {Component} from '@angular/core';
import {Member} from "./shared/member";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  memberList: Array<Member> = [new Member("Sergio"), new Member("Mario")];
}
