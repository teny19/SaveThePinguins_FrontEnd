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
  };
  constructor(private router: Router) {
  	// this.router.navigateByUrl('/tabs/');
  }

}
