import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChallengePage } from './single-challenge.page';

describe('SingleChallengePage', () => {
  let component: SingleChallengePage;
  let fixture: ComponentFixture<SingleChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleChallengePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
