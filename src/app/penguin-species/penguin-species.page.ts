import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-penguin-species',
  templateUrl: './penguin-species.page.html',
  styleUrls: ['./penguin-species.page.scss'],
})
export class PenguinSpeciesPage implements OnInit {
  species = [{
    id: 1,
    name: 'King Penguin',
    img: 'kingpenguin.jpg',
    cover: 'coverimage.jpg',
    desc: 'This penguin species is 70 - 100 cm tall and weights 10-16 kg. It lives in the northern reaches of Antarctica and its diet consists of marine fish. It can live over 20 years long.'
  }, {
    id: 2,
    name: 'Emperor Penguin',
    img: 'emperorpenguin.jpg',
    cover: 'coverimage.jpg',
    desc: 'This penguin species is the largest reaching 100 - 125 cm in height and weighting 22 - 45 kg. It lives in the Antarctica and the surrounding seas and its diet consists of marine fish. It can live up to 50 years.'
  },
  {
    id: 3,
    name: 'Humboldt Penguin',
    img: 'humboldtpenguin.jpg',
    cover: 'coverimage.jpg',
    desc: 'This penguin species can reach 45 - 60 cm in height and weight 3.5 - 6 kg. It lives in Southern Chile and Peru and its diet consists of marine fish and anchovy and squids. It can live over 20 years long.'
  },
  {
    id: 4,
    name: 'African Penguin',
    img: 'africanpenguin.jpg',
    cover: 'coverimage.jpg',
    desc: 'This penguin species is 60 - 70 cm tall and weights 2.2 - 3.5 kg. It lives in the coastal region of southern africa and its diet consists of pelagic schooling fish. It can live over 20 years long.'
  },
  {
    id: 5,
    name: 'Southern Rockhopper Penguin',
    img: 'southernrockhopperpenguin.jpg',
    cover: 'coverimage.jpg',
    desc: 'This penguin reaches a lenght of 45 - 58 cm and weighs around 2 - 3.5 kg. It lives in the coastal region of south America, the flakland Islangs and ISlands of New Zealand. Its diet consists of marine fish, crustaceans and squids. It can live over 20 years long.'
  }
  ];  

  expanded = false;
  emptySpecie = {
    id: 0,
    name: '',
    img: '',
    desc: ''
  };
  selectedSpecie = {};

  constructor() { }

  ngOnInit() {
    this.expanded = false;

    this.selectedSpecie = this.emptySpecie;
  }

  goBack() {
    this.selectedSpecie = this.emptySpecie;
  }
  showAll(evt) {
    this.expanded = !this.expanded;
  }
  showPenguin(evt, id) {
    this.selectedSpecie = this.species.find(x => x.id === id);
    // this.getContent(this);
  }
}
