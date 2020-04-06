import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocinhosComponent } from './docinhos.component';

describe('DocinhosComponent', () => {
  let component: DocinhosComponent;
  let fixture: ComponentFixture<DocinhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocinhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
