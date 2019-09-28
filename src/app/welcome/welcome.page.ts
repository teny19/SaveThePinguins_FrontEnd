import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss']
})
export class WelcomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    pager: true
  };

  penguins = [
  	{'name': 'Bruno', 'age': '7', 'img': 'penguinbruno.png'},
  	{'name': 'Franziska', 'age': '5', 'img': 'penguinfranziska.png'},
  	{'name': 'Julia', 'age': '2', 'img': 'penguinjulia.png'},
  	{'name': 'Ferdinand', 'age': '10', 'img': 'penguinferdinand.png'}
  ]

  constructor() {
  	// this.router.navigateByUrl('/tabs/');
  }

  move(slides, page, penguin){
    slides.slideTo(page);
    console.log('penguin', penguin);
  }

}
