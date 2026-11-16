import { Component } from '@angular/core';

type GalleryItem = {
  title: string;
  description: string;
  src: string;
  srcset: string;
  sizes: string;
  alt: string;
};

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  gallery: GalleryItem[] = [
    {
      title: 'Kelp Forest',
      description: 'A calm cold-water habitat where divers move patiently through dense algae.',
      src: '/img/gallery/kelp-768.webp',
      srcset: '/img/gallery/kelp-480.webp 480w, /img/gallery/kelp-768.webp 768w, /img/gallery/kelp-1200.webp 1200w',
      sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
      alt: 'Freediver moving through a cold-water kelp forest surrounded by green seaweed'
    },
    {
      title: 'Warm Reef',
      description: 'Bright reefs with clear visibility and a rich biodiversity that rewards slow movement.',
      src: '/img/gallery/reef-768.webp',
      srcset: '/img/gallery/reef-480.webp 480w, /img/gallery/reef-768.webp 768w, /img/gallery/reef-1200.webp 1200w',
      sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
      alt: 'Diver gliding above a warm-water coral reef with tropical fish nearby'
    },
    {
      title: 'Bluewater Hunt',
      description: 'Open-water dives demand focus, drift control and a solid understanding of depth.',
      src: '/img/gallery/marlin-768.webp',
      srcset: '/img/gallery/marlin-480.webp 480w, /img/gallery/marlin-768.webp 768w, /img/gallery/marlin-1200.webp 1200w',
      sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
      alt: 'Freediver holding a large marlin in deep blue offshore waters'
    },
    {
      title: 'Pelagic Catch',
      description: 'Tuna are fast, powerful predators that reward preparation, timing and patience.',
      src: '/img/gallery/tuna-768.webp',
      srcset: '/img/gallery/tuna-480.webp 480w, /img/gallery/tuna-768.webp 768w, /img/gallery/tuna-1200.webp 1200w',
      sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
      alt: 'Spearfisher with a large tuna captured in open water'
    },
    {
      title: 'Rocky Bottom',
      description: 'Crustaceans hide among the crevices, so careful observation is key to sustainable hunting.',
      src: '/img/gallery/lobster-768.webp',
      srcset: '/img/gallery/lobster-480.webp 480w, /img/gallery/lobster-768.webp 768w, /img/gallery/lobster-1200.webp 1200w',
      sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
      alt: 'Freediver holding a spiny lobster among rocks and reef crevices'
    }
  ];
}
