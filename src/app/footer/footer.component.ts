import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() authorName: string;
  @Input() authorURL: string;
  constructor() { }

  ngOnInit() {
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

}
