import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersDetailsComponent } from './characters/characters-details/characters-details.component';
import { CharacterComicsComponent } from './characters/character-comics/character-comics.component';
import { CharacterEventsComponent } from './characters/character-events/character-events.component';
import { CharacterSeriesComponent } from './characters/character-series/character-series.component';
import { CharacterStoriesComponent } from './characters/character-stories/character-stories.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDetailsComponent } from './comics/comics-details/comics-details.component';
import { SeriesComponent } from './series/series.component';
import { SeriesDetailsComponent } from './series/series-details/series-details.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesDetailsComponent } from './stories/stories-details/stories-details.component';
import { CreatorsComponent } from './creators/creators.component';
import { CreatorsDetailsComponent } from './creators/creators-details/creators-details.component';
import { EventsComponent } from './events/events.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';


import { TesteTypescriptComponent } from './teste-typescript/teste-typescript.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharactersDetailsComponent },
  { path: 'character-comics/:id', component: CharacterComicsComponent },
  { path: 'character-events/:id', component: CharacterEventsComponent },
  { path: 'character-series/:id', component: CharacterSeriesComponent },
  { path: 'character-stories/:id', component: CharacterStoriesComponent },

  { path: 'comics', component: ComicsComponent },
  { path: 'comic/:id', component: ComicsDetailsComponent },

  { path: 'creators', component: CreatorsComponent },
  { path: 'creator/:id', component: CreatorsDetailsComponent },

  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventsDetailsComponent },

  { path: 'series', component: SeriesComponent },
  { path: 'serie/:id', component: SeriesDetailsComponent },

  { path: 'stories', component: StoriesComponent },
  { path: 'storie/:id', component: StoriesDetailsComponent },

  { path: 'testes', component: TesteTypescriptComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
