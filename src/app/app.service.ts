import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';

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

  get memberList() {
    return this.memberObservable.map(res => res.json());
  }
}
