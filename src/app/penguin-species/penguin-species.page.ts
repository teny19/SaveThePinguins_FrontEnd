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
    name: 'Penguin name',
    img: 'africanpenguin.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Sunt ad laudantium ullam nobis magni, molestiae, nisi  doloribus fugiat quam, quo odio ex sequi eum recusandae  tempore optio! Veniam, mollitia soluta.'
  }, {
    id: 2,
    name: 'Penguin name',
    img: 'kingpenguin.jpg',

    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Sunt ad laudantium ullam nobis magni, molestiae, nisi  doloribus fugiat quam, quo odio ex sequi eum recusandae  tempore optio! Veniam, mollitia soluta.'
  }, {
    id: 3,
    name: 'html5',
    img: 'emperorpenguin.jpg',

    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Sunt ad laudantium ullam nobis magni, molestiae, nisi  doloribus fugiat quam, quo odio ex sequi eum recusandae  tempore optio! Veniam, mollitia soluta.'
  }, {
    id: 4,
    name: 'js',
    img: 'humboldtpenguin.jpg',

    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Sunt ad laudantium ullam nobis magni, molestiae, nisi  doloribus fugiat quam, quo odio ex sequi eum recusandae  tempore optio! Veniam, mollitia soluta.'
  }, {
    id: 5,
    name: 'js',
    img: 'southernrockhopperpenguin.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Sunt ad laudantium ullam nobis magni, molestiae, nisi  doloribus fugiat quam, quo odio ex sequi eum recusandae  tempore optio! Veniam, mollitia soluta.'
  }];
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
