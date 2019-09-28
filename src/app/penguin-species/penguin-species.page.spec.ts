import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinSpeciesPage } from './penguin-species.page';

describe('PenguinSpeciesPage', () => {
  let component: PenguinSpeciesPage;
  let fixture: ComponentFixture<PenguinSpeciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenguinSpeciesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenguinSpeciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
