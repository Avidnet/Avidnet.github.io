import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaniotComponent } from './faniot.component';

describe('FaniotComponent', () => {
  let component: FaniotComponent;
  let fixture: ComponentFixture<FaniotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaniotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaniotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
