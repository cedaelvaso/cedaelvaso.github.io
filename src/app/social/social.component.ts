import {Component, OnInit} from '@angular/core';
import {Link} from "../shared/link";
import {Observable} from "rxjs/Observable";
import {AppService} from "../app.service";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  socialList: Observable<Array<Link>>;
  numColumns: Number = 1;

  constructor(private _appService: AppService) {
    this.socialList = this._appService.socialList.map(l =>
      l.sort((a, b) =>
        a.hint.toLowerCase().localeCompare(b.hint.toLowerCase()))
    );
    this.socialList.subscribe(l => this.numColumns = l.length);
  }

  ngOnInit() {
  }

}
