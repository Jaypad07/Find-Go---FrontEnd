import { Component } from '@angular/core';
import { config } from '../config';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  apiKey: string;

  constructor() {
    this.apiKey = config.apiKey;
  }
}

