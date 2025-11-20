import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSolicitationComponent } from './card-solicitation-component';

describe('CardSolicitationComponent', () => {
  let component: CardSolicitationComponent;
  let fixture: ComponentFixture<CardSolicitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSolicitationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
