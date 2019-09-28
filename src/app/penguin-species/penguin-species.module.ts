import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PenguinSpeciesPage } from './penguin-species.page';

const routes: Routes = [
  {
    path: '',
    component: PenguinSpeciesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PenguinSpeciesPage]
})
export class PenguinSpeciesPageModule {}
