import { GamesService } from './games/games.service';
import { CommonModule } from '@angular/common';
import { HeroesService } from './heroes/heroes.service';
import { SkillsService } from './skills/skills.service';
import { routes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './heroes/hero-details.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes/heroes-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionsListComponent } from './actions/actions-list.component';
import { ActionsService } from './actions/actions.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { CharacterSheetComponent } from './actions/character-sheet.component';
import { ActionsSettingsComponent } from './actions/actions-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './games/games.component';
import { ImageUploaderComponent } from './_shared/image-uploader/image-uploader.component';
import { ImageUploaderService } from './_shared/image-uploader/image-uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesListComponent,
    ActionsListComponent,
    CharacterSheetComponent,
    ActionsSettingsComponent,
    GamesComponent,
    ImageUploaderComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [SkillsService, HeroesService, GamesService, ActionsService, ImageUploaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
