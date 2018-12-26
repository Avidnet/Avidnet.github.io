import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: ':locale', component: MainComponent },
  { path: '', redirectTo: 'en', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
