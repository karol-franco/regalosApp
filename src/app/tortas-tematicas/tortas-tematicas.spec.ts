import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortasTematicas } from './tortas-tematicas';

describe('TortasTematicas', () => {
  let component: TortasTematicas;
  let fixture: ComponentFixture<TortasTematicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TortasTematicas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortasTematicas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
