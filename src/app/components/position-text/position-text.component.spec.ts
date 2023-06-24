import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTextComponent } from './position-text.component';

describe('PositionTextComponent', () => {
  let component: PositionTextComponent;
  let fixture: ComponentFixture<PositionTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
