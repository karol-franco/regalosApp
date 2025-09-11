import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regalos } from './regalos';

describe('Regalos', () => {
  let component: Regalos;
  let fixture: ComponentFixture<Regalos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Regalos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Regalos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
