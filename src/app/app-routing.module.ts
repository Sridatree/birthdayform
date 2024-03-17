// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemoriesTogetherComponent } from './memories-together/memories-together.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'memories-together', component: MemoriesTogetherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
