import { NgsRevealConfig } from 'ng-scrollreveal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {

  col1Config: NgsRevealConfig;

  constructor() { 


  }

  ngOnInit() {
  }

}
