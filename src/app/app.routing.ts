import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersDetailsComponent } from './characters/characters-details.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDetailsComponent } from './comics/comics-details.component';
import { SeriesComponent } from './series/series.component';
import { SeriesDetailsComponent } from './series/series-details.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesDetailsComponent } from './stories/stories-details.component';
import { CreatorsComponent } from './creators/creators.component';
import { CreatorsDetailsComponent } from './creators/creators-details.component';
import { EventsComponent } from './events/events.component';
import { EventsDetailsComponent } from './events/events-details.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharactersDetailsComponent },

  { path: 'comics', component: ComicsComponent },
  { path: 'comic/:id', component: ComicsDetailsComponent },

  { path: 'creators', component: CreatorsComponent },
  { path: 'creators/:id', component: CreatorsDetailsComponent },

  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventsDetailsComponent },

  { path: 'series', component: SeriesComponent },
  { path: 'series/:id', component: SeriesDetailsComponent },

  { path: 'stories', component: StoriesComponent },
  { path: 'stories/:id', component: StoriesDetailsComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
