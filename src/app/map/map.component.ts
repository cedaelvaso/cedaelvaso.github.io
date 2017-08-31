import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {
  }

  @Input() lat: number;
  @Input() lng: number;
  @Input() cardTitle: string = "¿Cómo llegar?";
  @Input() url: string;

  ngOnInit() {
  }

}
