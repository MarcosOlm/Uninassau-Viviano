import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusCardComponent } from './plus-card-component';

describe('PlusCardComponent', () => {
  let component: PlusCardComponent;
  let fixture: ComponentFixture<PlusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
