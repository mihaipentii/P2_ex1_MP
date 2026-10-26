import { Component } from '@angular/core';
import { Nav } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  imports: [Nav],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}