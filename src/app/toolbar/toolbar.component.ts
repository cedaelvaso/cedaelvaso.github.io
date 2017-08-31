import {Component, OnInit} from '@angular/core';
import {Link} from "../shared/link";
import {AppService} from "../app.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title: Observable<string>;
  socialList: Observable<Array<Link>>;

  constructor(private _appService: AppService) {
    this.title = _appService.title;
    this.socialList = _appService.socialList;
  }

  ngOnInit() {
  }

  onClickTitle() {
    window.scrollTo(0, 0);
  }
}
