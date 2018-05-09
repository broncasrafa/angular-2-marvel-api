
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';

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

import { CharactersService } from './characters/characters.service';
import { ComicsService } from './comics/comics.service';
import { CreatorsService } from './creators/creators.service';
import { EventsService } from './events/events.service';
import { SeriesService } from './series/series.service';
import { StoriesService } from './stories/stories.service';
import { SearchService } from './search/search.service';
import { TesteTypescriptComponent } from './teste-typescript/teste-typescript.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,

    CharactersComponent,
    CharactersDetailsComponent,
    CharacterComicsComponent,
    CharacterEventsComponent,
    CharacterSeriesComponent,
    CharacterStoriesComponent,

    ComicsComponent,
    ComicsDetailsComponent,

    SeriesComponent,
    SeriesDetailsComponent,

    StoriesComponent,
    StoriesDetailsComponent,

    CreatorsComponent,
    CreatorsDetailsComponent,

    EventsComponent,
    EventsDetailsComponent,
    TesteTypescriptComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    CharactersService,
    ComicsService,
    CreatorsService,
    EventsService,
    SeriesService,
    StoriesService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
