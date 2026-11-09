import { Component } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html'
})
export class SafetyComponent {
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
