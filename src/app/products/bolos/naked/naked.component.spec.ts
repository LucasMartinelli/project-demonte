import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NakedComponent } from './naked.component';

describe('NakedComponent', () => {
  let component: NakedComponent;
  let fixture: ComponentFixture<NakedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NakedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NakedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
