import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class Nav {
  links = [
    { label: 'Home', path: '/' },
    { label: 'Habitats', path: '/habitats' },
    { label: 'Species', path: '/species' },
    { label: 'Safety', path: '/safety' }
  ];
}