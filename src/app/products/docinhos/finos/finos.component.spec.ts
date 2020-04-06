import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinosComponent } from './finos.component';

describe('FinosComponent', () => {
  let component: FinosComponent;
  let fixture: ComponentFixture<FinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
