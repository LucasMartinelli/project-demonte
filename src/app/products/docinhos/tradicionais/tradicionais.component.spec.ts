import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradicionaisComponent } from './tradicionais.component';

describe('TradicionaisComponent', () => {
  let component: TradicionaisComponent;
  let fixture: ComponentFixture<TradicionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradicionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradicionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
