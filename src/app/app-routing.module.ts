import { ActionsSettingsComponent } from './actions/actions-settings.component';
import { CharacterSheetComponent } from './actions/character-sheet.component';
import { ActionsListComponent } from './actions/actions-list.component';
import { HeroesListComponent } from './heroes/heroes-list.component';
import { HeroDetailsComponent } from "./heroes/hero-details.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';

export const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: HeroesListComponent },
  { path: 'games/:id/heroes/:id2',
    component: HeroDetailsComponent,
    children: [
      {
      path: '',
      redirectTo: 'actions',
      pathMatch: 'full'
    },
      {
        path: 'actions',
        component: ActionsListComponent
      },
      {
        path: 'actions-settings',
        component: ActionsSettingsComponent
      },
      {
        path: 'character-sheet',
        component: CharacterSheetComponent
      }
    ]
  },
  { path: '', redirectTo: '/games', pathMatch: 'full'}
];


@NgModule({
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
