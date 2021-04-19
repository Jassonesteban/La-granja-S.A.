import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeletePigsComponent } from './form-delete-pigs.component';

describe('FormDeletePigsComponent', () => {
  let component: FormDeletePigsComponent;
  let fixture: ComponentFixture<FormDeletePigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDeletePigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDeletePigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
