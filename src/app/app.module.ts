import { HeroesService } from './heroes/heroes.service';
import { SkillsService } from './heroes/skills.service';
import { routes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from "./heroes/hero-details.component";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes/heroes-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SkillsService,
  HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
