import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvedRingCylindricalComponent } from './curved-ring-cylindrical.component';

describe('CurvedRingCylindricalComponent', () => {
  let component: CurvedRingCylindricalComponent;
  let fixture: ComponentFixture<CurvedRingCylindricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurvedRingCylindricalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurvedRingCylindricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
