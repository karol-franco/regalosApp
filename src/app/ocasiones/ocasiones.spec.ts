import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocasiones } from './ocasiones';

describe('Ocasiones', () => {
  let component: Ocasiones;
  let fixture: ComponentFixture<Ocasiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ocasiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ocasiones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
