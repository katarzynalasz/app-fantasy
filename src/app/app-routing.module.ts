import { HeroesListComponent } from './heroes/heroes-list.component';
import { HeroDetailsComponent } from "./heroes/hero-details.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'heroes', component: HeroesListComponent },
  { path: 'heroes/:id', component: HeroDetailsComponent},
  { path: '', redirectTo: '/heroes', pathMatch: 'full'}
];


@NgModule({
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
