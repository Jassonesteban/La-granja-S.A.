import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterPigsComponent } from './form-register-pigs.component';

describe('FormRegisterPigsComponent', () => {
  let component: FormRegisterPigsComponent;
  let fixture: ComponentFixture<FormRegisterPigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterPigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterPigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
