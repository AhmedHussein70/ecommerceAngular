import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetalsComponent } from './card-detals.component';

describe('CardDetalsComponent', () => {
  let component: CardDetalsComponent;
  let fixture: ComponentFixture<CardDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
