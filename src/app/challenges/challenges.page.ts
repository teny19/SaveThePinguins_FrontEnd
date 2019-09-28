import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SingleChallengePage } from '../single-challenge/single-challenge.page';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {
  challenges = [{
    name: 'One way plastic',
    img: 'challenge/SingleUsePlastic.png',
    desc: "One way plastic such as plastic bags and disposable cutlery pollute the oceans. These plastic object are dangerous for penguins as thei could for example get stuck in a plastic bag and choke to death. The goal of this challenge is to avoid single-use plastic and replace it with something more sustainable.",
    level: 3,
    url: '/single-challenge'
  }, {
    name: 'Know more about Penguins',
    img: 'challenge/Penguins.png',
    desc: "Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere, with only one species, the Galapagos penguin, found north of the equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage, and their wings have evolved into flippers.",
    level: 1,
    url: '/penguin-species'

  },
  {
    name: 'Microplastic',
    img: 'challenge/Microplastic-1.png',
    desc: "Microplastic is a large problem when it enters the marinal food chain. When penguins eat lots of fish that are contaminated with microplastic, the plastic ultimately ends up in the pinguin's body cuasing severe problems for them. The goal of this challange is to get more aware about microplastic and try to avoid buying any product that contains microplastic.",
    level: 2,
    url: '/single-challenge'

  },
  {
    name: 'Fish consumption',
    img: 'challenge/FishChallenge.png',
    desc: "Human fish consumption has quadrupled over the last 50 years. This has a direct impact on the penguins as their main food resource is shrinking dramatically. In addition, penguins regularly get caught in nets of fisheries and die. The goal of this challenge is therefore to reduce the consumption of wild cuaght fish.",
    level: 1,
    url: '/single-challenge'

  },
  {
    name: 'World clean up day',
    img: 'challenge/WorldCleanUpDay.png',
    desc: "This challenge invites you to join the world clean up day on September 21st 2020. Every participant is obliged to clean up the world and throw away litter that is lying around in the streets.",
    level: 4,
    url: '/single-challenge'

  }];
  pushPage: any;

  constructor(public modalController: ModalController) {
    this.pushPage = SingleChallengePage;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SingleChallengePage
    });
    return await modal.present();
  }


  ngOnInit() {
  }

}
