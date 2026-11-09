import { Component } from '@angular/core';

@Component({
  selector: 'app-habitats',
  templateUrl: './habitats.component.html'
})
export class HabitatsComponent {
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
}
