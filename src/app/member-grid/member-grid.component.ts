import {Component, HostListener, OnInit} from '@angular/core';
import {Member} from "../shared/member";
import {Observable} from "rxjs/Observable";
import {AppService} from "../app.service";

@Component({
  selector: 'app-member-grid',
  templateUrl: './member-grid.component.html',
  styleUrls: ['./member-grid.component.scss']
})
export class MemberGridComponent implements OnInit {

  memberList: Observable<Array<Member>>;

  numCols: number = 1;
  rowHeight: number = 400;

  constructor(private _appService: AppService) {
    this.memberList = this._appService.memberList;
  }

  static get widthScreen(): number {
    return window.screen.width;
  }

  private static get numColsByWidth(): number {
    if (MemberGridComponent.widthScreen < 420) {
      return 1;
    } else if (MemberGridComponent.widthScreen < 690) {
      return 2;
    } else if (MemberGridComponent.widthScreen < 995) {
      return 3;
    } else {
      return 4;
    }
  }

  ngOnInit() {
    this.updateGrid();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateGrid();
  }

  updateGrid() {
    this.numCols = MemberGridComponent.numColsByWidth;
    this.rowHeight = (Math.min(MemberGridComponent.widthScreen, 960) / this.numCols) + 140;
  }


}
