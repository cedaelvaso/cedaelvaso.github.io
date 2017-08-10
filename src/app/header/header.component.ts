import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fullImagePath: String = 'assets/images/header.png';

  @Input() inConstruction: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
