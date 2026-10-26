import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SpearfishingComponent } from './spearfishing/spearfishing.component';
import { Footer } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SpearfishingComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}