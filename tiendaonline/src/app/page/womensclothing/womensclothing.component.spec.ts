import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensclothingComponent } from './womensclothing.component';

describe('WomensclothingComponent', () => {
  let component: WomensclothingComponent;
  let fixture: ComponentFixture<WomensclothingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomensclothingComponent]
    });
    fixture = TestBed.createComponent(WomensclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
