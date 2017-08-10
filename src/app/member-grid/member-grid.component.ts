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

  ngOnInit() {
  }

}
