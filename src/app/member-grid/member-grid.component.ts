import {Component, OnInit, Input} from '@angular/core';
import {Member} from "../shared/member";

@Component({
  selector: 'app-member-grid',
  templateUrl: './member-grid.component.html',
  styleUrls: ['./member-grid.component.css']
})
export class MemberGridComponent implements OnInit {

  @Input() memberList: Array<Member>;

  constructor() {
  }

  get widthScreen(): Number {
    return window.screen.width;
  }

  get numCols(): Number {
    if (this.widthScreen < 767) {
      return 1;
    } else if (this.widthScreen < 991) {
      return 3;
    } else {
      return 4;
    }
  }

  ngOnInit() {
  }

}
