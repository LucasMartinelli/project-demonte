import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfantisComponent } from './infantis.component';

describe('InfantisComponent', () => {
  let component: InfantisComponent;
  let fixture: ComponentFixture<InfantisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfantisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfantisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
