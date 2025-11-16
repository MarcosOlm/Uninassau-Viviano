import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusCard } from './plus-card';

describe('PlusCard', () => {
  let component: PlusCard;
  let fixture: ComponentFixture<PlusCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
