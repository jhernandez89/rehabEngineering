import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentState = 'home';
  constructor(private router: Router) {
    this.router.events.subscribe(navRouter => {this.currentState = navRouter['url']});
  }

  ngOnInit() {
  }

}
