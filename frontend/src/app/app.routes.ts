import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home';
import { Draw } from './pages/draw';
import { Runes } from './pages/runes';
import { RuneDetail } from './pages/rune-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'draw', component: Draw },
  { path: 'runes', component: Runes },
  { path: 'rune/:id', component: RuneDetail },
  { path: 'runes/:name', loadComponent: () => import('./pages/rune-detail').then(m => m.RuneDetail) },
];
export const appRouting = RouterModule.forRoot(routes, { useHash: true });
