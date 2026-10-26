import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class Nav {
  links = [
    { label: 'Home', href: '#home' },
    { label: 'Habitats', href: '#habitats' },
    { label: 'Species', href: '#species' },
    { label: 'Safety', href: '#safety' }
  ];
}