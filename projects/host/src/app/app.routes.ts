import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  {
    path: 'games',
    loadComponent: () =>
      loadRemoteModule('gameList', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'games/:gameID',
    loadComponent: () =>
      loadRemoteModule('gameDetail', './Component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    redirectTo: 'games',
  },
];
