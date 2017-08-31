import {Component, Input, OnInit} from '@angular/core';
import {Link} from "../shared/link";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input() socialList: Array<Link> = [];

  constructor() {
  }

  ngOnInit() {
  }

}
