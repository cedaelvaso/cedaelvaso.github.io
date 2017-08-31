import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private _appService: AppService) {
    this.socialList = this._appService.socialList;
  }

  ngOnInit() {
  }

}
