import { Component } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html'
})
export class SpeciesComponent {
  species = [
    {
      image: '/img/tuna.jpeg',
      alt: 'Spearfisher holding a large tuna underwater',
      title: 'Tuna',
      text: 'A fast open-water predator. Hunting it requires stamina, patience and a reliable setup.'
    },
    {
      image: '/img/crayfish.png',
      alt: 'Spearfisher holding a spiny lobster underwater',
      title: 'Spiny Lobster',
      text: 'Found hiding in rocky crevices. Always check local size limits and seasons before collecting.'
    }
  ];
}
