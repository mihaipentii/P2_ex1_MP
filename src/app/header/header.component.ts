import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { SpearfishingComponent } from '../spearfishing/spearfishing.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Nav, SpearfishingComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}