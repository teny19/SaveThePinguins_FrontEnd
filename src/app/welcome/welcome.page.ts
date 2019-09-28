import { Component } from '@angular/core';


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
  ngOnInit() {
  }

  penguins = [
    { 'name': 'Bruno', 'age': '7', 'img': 'penguinbruno.png' },
    { 'name': 'Franziska', 'age': '12', 'img': 'penguinfranziska.png' },
    { 'name': 'Julia', 'age': '2', 'img': 'penguinjulia.png' },
    { 'name': 'Ferdinand', 'age': '10', 'img': 'penguinferdinand.png' }
  ]

  constructor() {
    // this.router.navigateByUrl('/tabs/');
  }

  move(slides, page, penguin) {
    slides.slideTo(page);
    console.log('penguin', penguin);
  }

}
