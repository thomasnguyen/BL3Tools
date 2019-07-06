import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharSelectComponent } from './char-select.component';

describe('CharSelectComponent', () => {
  let component: CharSelectComponent;
  let fixture: ComponentFixture<CharSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
