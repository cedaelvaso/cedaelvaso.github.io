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

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

}
