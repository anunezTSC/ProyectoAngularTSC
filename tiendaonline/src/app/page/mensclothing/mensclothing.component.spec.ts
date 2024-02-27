import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensclothingComponent } from './mensclothing.component';

describe('MensclothingComponent', () => {
  let component: MensclothingComponent;
  let fixture: ComponentFixture<MensclothingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensclothingComponent]
    });
    fixture = TestBed.createComponent(MensclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
