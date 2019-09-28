import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChallengeCompletedPage } from './challenge-completed.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengeCompletedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChallengeCompletedPage]
})
export class ChallengeCompletedPageModule {}
