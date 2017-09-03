import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Link} from './shared/link';
import {Member} from './shared/member';
import {Maps} from './shared/maps';
import {Author} from './shared/author';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CarouselImage} from './shared/carousel-image';


@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  get carouselObservable(): Observable<Response> {
    return this.http.get('assets/data/carousel.json');
  }

  get carouselObservableJSON(): Observable<any> {
    return this.carouselObservable.map(res => res.json());
  }

  get memberObservable(): Observable<Response> {
    return this.http.get('assets/data/members.json');
  }

  get memberObservableJSON(): Observable<any> {
    return this.memberObservable.map(res => res.json());
  }

  get siteObservable(): Observable<Response> {
    return this.http.get('assets/data/site.json');
  }

  get siteObservableJSON(): Observable<any> {
    return this.siteObservable.map(res => res.json());
  }

  get title(): Observable<string> {
    return this.siteObservableJSON.map(site => site.title);
  }

  get inConstruction(): Observable<boolean> {
    return this.siteObservableJSON.map(site => site.inConstruction);
  }

  get socialList(): Observable<Array<Link>> {
    return this.siteObservableJSON.map(e =>
      e.socialList.map(e2 =>
        new Link(e2.url, e2.hint, e2.iconId)));
  }

  get maps(): Observable<Maps> {
    return this.siteObservableJSON.map(site =>
      new Maps(site.maps.lat, site.maps.lng, site.maps.mapsCardTitle, site.maps.directionsURL),
    );
  }

  get author(): Observable<Author> {
    return this.siteObservableJSON.map(e =>
      new Author(e.author.name, e.author.url),
    );
  }

  get memberList(): Observable<Array<Member>> {
    return this.memberObservableJSON.map(l =>
      l.map(e =>
        new Member(
          e.name, e.profileImageURL,
          e.linkList.map(link =>
            new Link(link.url, link.hint, link.iconId)),
          e.defaultLinkHint),
      )).map(l => l.sort(() => (Math.random() - 0.5)));
  }

  get carouselImageList(): Observable<Array<CarouselImage>> {
    return this.carouselObservableJSON.map(l =>
      l.map(e =>
        new CarouselImage(e.imageURL, e.captionTitle, e.captionSubTitle, e.date),
      )).map(l =>
      l.sort((e1, e2) => (e1.date < e2.date)));
  }

  get carouselCardTitle(): Observable<string> {
    return this.siteObservableJSON.map(site => site.carouselCardTitle);
  }

  get descriptionCardTitle(): Observable<string> {
    return this.siteObservableJSON.map(site => site.descriptionCardTitle);
  }

  get description(): Observable<string> {
    return this.siteObservableJSON.map(site => site.description);
  }
}
