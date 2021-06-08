import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() { }
  public footerHome: any = [
    {
      href: '#home',
      title: 'Home'
    },
    {
      href: '#about',
      title: 'About us'
    },
    {
      href: '#services',
      title: 'Services'
    },
    {
      href: '#careers',
      title: 'Careers'
    },
    {
      href: '#contact',
      title: 'Contact us'
    }
];

public footerCommunity: any = [
    {
      href: '#Software',
      title: 'Software Development'
    },
    {
      href: '#integration',
      title: 'Third-party software & integration'
    },
    {
      href: '#System', title: 'System legacy'
    },
    {
      href: '#Cloud', title: 'Cloud computing'
    },
    {
      href: '#DevOps', title: 'DevOps'
    },
    {
      href: '#Maintenance', title: 'Maintenance & support'
    }
];

public socialNavItems: any = [
{ href: 'https://twitter.com/CongoParking', icon: '<i class="fab fa-twitter fa-3x"></i>', title: 'Twitter' },
{ href: 'https://linkedin.com/company/congo-parking-service', icon: '<i class="fab fa-linkedin fa-3x"></i>', title: 'Linkedin' }
];

ngOnInit(): void {
}

jumpTo(href:any) {
  $('html, body').stop().animate({
    scrollTop: $(href).offset().top
  }, 1500);

}
}
