import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationDescriptionComponent } from './encapsulation-description.component';

describe('EncapsulationDescriptionComponent', () => {
  let component: EncapsulationDescriptionComponent;
  let fixture: ComponentFixture<EncapsulationDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
