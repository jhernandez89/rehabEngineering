import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adaptive-picture',
  templateUrl: './adaptive-picture.component.html',
  styleUrls: ['./adaptive-picture.component.css']
})
export class AdaptivePictureComponent implements OnInit {
  currentState = 'home';
  constructor(private router: Router) { 
    this.router.events.subscribe(navRouter => {this.currentState = navRouter['url']});
  }

  ngOnInit() {
  }

}
