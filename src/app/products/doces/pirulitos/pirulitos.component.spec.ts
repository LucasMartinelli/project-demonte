import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirulitosComponent } from './pirulitos.component';

describe('PirulitosComponent', () => {
  let component: PirulitosComponent;
  let fixture: ComponentFixture<PirulitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirulitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirulitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
