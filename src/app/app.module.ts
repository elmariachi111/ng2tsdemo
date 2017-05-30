import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule }  from './app-routing.module';
import {HttpModule} from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroService } from './hero.service';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import {DashboardComponent} from './dashboard.component';

import {AppComponent} from './app.component';




@NgModule({
  imports:      [ HttpModule, BrowserModule, FormsModule, AppRoutingModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  providers: [ HeroService ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

