import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { CreatorsComponent } from './creators/creators.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: HomeComponent },

  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharactersComponent },

  { path: 'comics', component: ComicsComponent },
  { path: 'comic/:id', component: ComicsComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
