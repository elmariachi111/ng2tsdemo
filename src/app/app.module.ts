import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule }  from './app-routing.module';

import { HeroService } from './hero.service';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  providers: [ HeroService ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

