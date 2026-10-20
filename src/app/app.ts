import { Component, signal } from '@angular/core';
import { Header } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('P2_ex1_MP');
}
