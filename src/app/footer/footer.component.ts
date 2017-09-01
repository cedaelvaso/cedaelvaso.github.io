import {Component, OnInit} from '@angular/core';
import {Author} from "../shared/author";
import {Observable} from "rxjs/Observable";
import {AppService} from "../app.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  author: Observable<Author>;

  constructor(private _appService: AppService) {
    this.author = _appService.author;
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  ngOnInit() {
  }

}
