import {Component, Input, OnInit} from '@angular/core';
import {Link} from "../shared/link";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() title: String;
  @Input() socialList: Array<Link>;
  constructor() {
  }

  ngOnInit() {
  }

  onClickTitle() {
    window.scrollTo(0,0);
  }
}
