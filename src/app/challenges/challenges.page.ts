import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {
  challenges = [{
    name: '',
    desc: '',
    level: '', // 1 to 5, 5 is the hardest
  }, {}, {}, {}, {}, {}];
  constructor() { }

  ngOnInit() {
  }

}
