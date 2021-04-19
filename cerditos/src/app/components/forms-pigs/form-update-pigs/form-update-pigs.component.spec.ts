import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdatePigsComponent } from './form-update-pigs.component';

describe('FormUpdatePigsComponent', () => {
  let component: FormUpdatePigsComponent;
  let fixture: ComponentFixture<FormUpdatePigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdatePigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdatePigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
