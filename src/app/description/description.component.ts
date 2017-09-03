import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {

  description: Observable<string>;
  cardTitle: Observable<string>;

  constructor(private _appService: AppService) {
    this.description = this._appService.description;
    this.cardTitle = this._appService.descriptionCardTitle;
  }

  ngOnInit() {
  }

}
