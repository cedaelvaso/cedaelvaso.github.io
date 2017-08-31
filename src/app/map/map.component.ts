import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Maps} from "../shared/maps";
import {AppService} from "../app.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  maps: Observable<Maps>;

  constructor(private _appService: AppService) {
    this.maps = this._appService.maps;
  }



  ngOnInit() {
  }

}
