import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BemcasadosComponent } from './bemcasados.component';

describe('BemcasadosComponent', () => {
  let component: BemcasadosComponent;
  let fixture: ComponentFixture<BemcasadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BemcasadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BemcasadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
