import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'messaging', loadChildren: './messaging/messaging.module#MessagingPageModule' },
  { path: 'challenges', loadChildren: './challenges/challenges.module#ChallengesPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'penguin-species', loadChildren: './penguin-species/penguin-species.module#PenguinSpeciesPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'single-challenge', loadChildren: './single-challenge/single-challenge.module#SingleChallengePageModule' },
  { path: 'challenge-completed', loadChildren: './challenge-completed/challenge-completed.module#ChallengeCompletedPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
