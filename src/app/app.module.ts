
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { CreatorsComponent } from './creators/creators.component';
import { EventsComponent } from './events/events.component';
import { SearchComponent } from './search/search.component';

import { routing, appRoutingProviders } from './app.routing';

import { CharactersService } from './characters/characters.service';
import { ComicsService } from './comics/comics.service';
import { CreatorsService } from './creators/creators.service';
import { EventsService } from './events/events.service';
import { SeriesService } from './series/series.service';
import { StoriesService } from './stories/stories.service';
import { SearchService } from './search/search.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';





@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ComicsComponent,
    SeriesComponent,
    StoriesComponent,
    CreatorsComponent,
    EventsComponent,
    SearchComponent,
    HomeComponent,
    AboutComponent
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
