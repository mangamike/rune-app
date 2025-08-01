import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Runes } from './runes';

describe('Runes', () => {
  let component: Runes;
  let fixture: ComponentFixture<Runes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Runes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Runes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
