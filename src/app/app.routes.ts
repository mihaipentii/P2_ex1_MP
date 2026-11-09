import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitatsComponent } from './habitats/habitats.component';
import { SpeciesComponent } from './species/species.component';
import { SafetyComponent } from './safety/safety.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'DeepBlue | Home' },
  { path: 'habitats', component: HabitatsComponent, title: 'DeepBlue | Habitats' },
  { path: 'species', component: SpeciesComponent, title: 'DeepBlue | Species' },
  { path: 'safety', component: SafetyComponent, title: 'DeepBlue | Safety' },
  { path: '**', redirectTo: '' }
];
