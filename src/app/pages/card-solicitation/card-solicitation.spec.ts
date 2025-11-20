import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardSolicitation } from './card-solicitation';

describe('CardSolicitation', () => {
  let component: CardSolicitation;
  let fixture: ComponentFixture<CardSolicitation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSolicitation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSolicitation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
