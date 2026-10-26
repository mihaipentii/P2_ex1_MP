import { Component } from '@angular/core';

@Component({
  selector: 'app-spearfishing',
  templateUrl: './spearfishing.component.html',
  styleUrl: './spearfishing.component.css'
})
export class SpearfishingComponent {
  habitats = [
    {
      image: '/img/coldWaterSeaForest.jpg',
      alt: 'Spearfisher aiming a speargun inside a cold-water kelp forest',
      title: 'Cold-Water Kelp Forests',
      text: 'Dense kelp forests hide rich marine life. Move slowly, use the vegetation as cover and wait for the fish to come to you.'
    },
    {
      image: '/img/warmWaterReef.jpeg',
      alt: 'Freediver swimming over a warm-water coral reef',
      title: 'Warm-Water Reefs',
      text: 'Clear water and rocky reefs offer great visibility. Take care of the coral and only target legal, selective catches.'
    }
  ];

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

  safety = [
    {
      icon: '🤝',
      title: 'Never Dive Alone',
      text: 'Always dive with a buddy who watches you from the surface.'
    },
    {
      icon: '🚩',
      title: 'Use a Dive Flag',
      text: 'A surface buoy with a flag makes you visible to boats.'
    },
    {
      icon: '🫁',
      title: 'Know Your Limits',
      text: 'Rest between dives and never push your breath-hold to the edge.'
    }
  ];
}