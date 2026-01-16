import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackGrid } from './tech-stack-grid';

describe('TechStackGrid', () => {
  let component: TechStackGrid;
  let fixture: ComponentFixture<TechStackGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
