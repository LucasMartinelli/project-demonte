import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpBtnComponent } from './up-btn.component';

describe('UpBtnComponent', () => {
  let component: UpBtnComponent;
  let fixture: ComponentFixture<UpBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
