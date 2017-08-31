import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Member} from "../shared/member";

@Component({
  selector: 'app-member-grid',
  templateUrl: './member-grid.component.html',
  styleUrls: ['./member-grid.component.scss']
})
export class MemberGridComponent implements OnInit {

  @Input() memberList: Array<Member>;

  numCols: number = 1;
  rowHeight: number = 400;

  constructor() {
  }

  static get widthScreen(): number {
    return window.screen.width;
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


  private static get numColsByWidth(): number {
    if (MemberGridComponent.widthScreen < 426) {
      return 1;
    } else if (MemberGridComponent.widthScreen < 769) {
      return 2;
    } else if (MemberGridComponent.widthScreen < 993) {
      return 3;
    } else {
      return 4;
    }
  }


}
