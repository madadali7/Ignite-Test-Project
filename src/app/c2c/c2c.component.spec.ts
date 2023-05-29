import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2cComponent } from './c2c.component';

describe('C2cComponent', () => {
  let component: C2cComponent;
  let fixture: ComponentFixture<C2cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
