import { ActionsSettingsComponent } from './actions/actions-settings.component';
import { CharacterSheetComponent } from './actions/character-sheet.component';
import { AddActionComponent } from './actions/add-action.component';
import { ActionsListComponent } from './actions/actions-list.component';
import { HeroesListComponent } from './heroes/heroes-list.component';
import { HeroDetailsComponent } from "./heroes/hero-details.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'heroes', component: HeroesListComponent },
  { path: 'heroes/:id',
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
  { path: '', redirectTo: '/heroes', pathMatch: 'full'}
];


@NgModule({
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
