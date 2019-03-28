import { LoginComponent } from './auth/login/login.component';
import { ActionsSettingsComponent } from './actions/actions-settings.component';
import { CharacterSheetComponent } from './actions/character-sheet.component';
import { ActionsListComponent } from './actions/actions-list.component';
import { HeroesListComponent } from './heroes/heroes-list.component';
import { NavComponent } from './_shared/nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { Page404Component } from './errors/page404/page404.component';

export const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: HeroesListComponent },
  {
    path: 'games/:id/heroes/:id2',
    component: NavComponent,
    children: [
      {
        path: 'actions',
        component: ActionsListComponent,
      },
      {
        path: 'actions-settings',
        component: ActionsSettingsComponent,
      },
      {
        path: 'character-sheet',
        component: CharacterSheetComponent,
      },
      {
        path: '',
        redirectTo: 'actions',
        pathMatch: 'full',
      },
      { path: '**', component: Page404Component },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [CommonModule],
})
export class AppRoutingModule {}
