import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { GamesService } from './games/games.service';
import { CommonModule } from '@angular/common';
import { HeroesService } from './heroes/heroes.service';
import { SkillsService } from './skills/skills.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './_shared/nav/nav.component';
import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
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
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page404Component } from './errors/page404/page404.component';
import { LoginComponent } from './auth/login/login.component';
import { LocalStorageService } from './auth/local-storage.service';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroesListComponent,
    ActionsListComponent,
    CharacterSheetComponent,
    ActionsSettingsComponent,
    GamesComponent,
    ImageUploaderComponent,
    Page404Component,
    LoginComponent,
    MainLayoutComponent,
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
    }),
  ],
  providers: [
    SkillsService,
    LocalStorageService,
    AuthService,
    AuthInterceptor,
    HeroesService,
    GamesService,
    ActionsService,
    ImageUploaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
