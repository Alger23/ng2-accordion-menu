import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' }
];
