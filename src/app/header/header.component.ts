import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullImagePath: string = 'assets/img/header.png';

  inConstruction: Observable<boolean>;

  constructor(private _appService: AppService) {
    this.inConstruction = this._appService.inConstruction
  }

  ngOnInit() {
  }

}
