import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Link} from './shared/link';
import {Member} from './shared/member';
import {Maps} from './shared/maps';
import {Author} from './shared/author';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {

  constructor(private http: Http) {
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
    return this.siteObservableJSON.map(site =>
      site.socialList.map(link =>
        new Link(link.url, link.hint, link.iconId)));
  }

  get maps(): Observable<Maps> {
    return this.siteObservableJSON.map(site =>
      new Maps(site.maps.lat, site.maps.lng, site.maps.mapsCardTitle, site.maps.directionsURL),
    );
  }

  get author(): Observable<Author> {
    return this.siteObservableJSON.map(site =>
      new Author(site.author.name, site.author.url),
    );
  }

  get memberList(): Observable<Array<Member>> {
    return this.memberObservableJSON.map(memberList =>
      memberList.map(member =>
        new Member(
          member.name, member.profileImageURL,
          member.linkList.map(link =>
            new Link(link.url, link.hint, link.iconId)),
          member.defaultLinkHint)))
      .map(memberList => memberList.sort(() => (Math.random() - 0.5)));
  }
}
