import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Altius Technology';
  loadedFeature = [
    'home',
    'about',
    'contact',
    'careers',
    'services',
    'page-not-found',
  ];

  onNavigate(feature: any) {

     for(let features of feature){
      features =this.loadedFeature = feature;
     }

  }
}
