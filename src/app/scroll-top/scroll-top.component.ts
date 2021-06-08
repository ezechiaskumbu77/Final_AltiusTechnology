import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollTop() {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  }
}
