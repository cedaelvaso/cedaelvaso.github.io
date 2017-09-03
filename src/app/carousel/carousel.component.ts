import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {CarouselImage} from '../shared/carousel-image';
import {AppService} from '../app.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponent implements OnInit {

  carouselImageList: Observable<Array<CarouselImage>>;
  cardTitle: Observable<string>;
  constructor(private _config: NgbCarouselConfig, private _appService: AppService) {
    _config.interval = 3000;
    _config.wrap = true;
    _config.keyboard = false;
    this.carouselImageList = this._appService.carouselImageList;
    this.cardTitle = this._appService.carouselCardTitle;
  }



  ngOnInit() {
  }

}
