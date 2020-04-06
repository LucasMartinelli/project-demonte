import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfeitadosComponent } from './confeitados.component';

describe('ConfeitadosComponent', () => {
  let component: ConfeitadosComponent;
  let fixture: ComponentFixture<ConfeitadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfeitadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfeitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
