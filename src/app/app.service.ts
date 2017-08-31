import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Link} from "./shared/link";
import {Member} from "./shared/member";
import {Maps} from "./shared/maps";
import {Author} from './shared/author';

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  get memberObservable(): Observable<any> {
    return this.http.get('assets/data/members.json');
  }

  get siteObservable(): Observable<any> {
    return this.http.get('assets/data/site.json');
  }

  get title(): Observable<string> {
    return this.siteObservable.map(site => site.title);
  }

  get inConstruction(): Observable<boolean> {
    return this.siteObservable.map(site => site.inConstruction);
  }

  get socialList(): Observable<Array<Link>> {
    return this.siteObservable.map(site => site.socialList);
  }

  get maps(): Observable<Maps> {
    return this.siteObservable.map(site => site.maps);
  }

  get author(): Observable<Author> {
    return this.siteObservable.map(site => site.author);
  }

  get memberList(): Observable<Array<Member>> {
    return this.memberObservable.map(res => res.json())
      .map(memberList => memberList.sort(() => (Math.random() - 0.5)));
  }
}
