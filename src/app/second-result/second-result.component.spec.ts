import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondResultComponent } from './second-result.component';

describe('SecondResultComponent', () => {
  let component: SecondResultComponent;
  let fixture: ComponentFixture<SecondResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
