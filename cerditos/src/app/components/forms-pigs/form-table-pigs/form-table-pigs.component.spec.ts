import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTablePigsComponent } from './form-table-pigs.component';

describe('FormTablePigsComponent', () => {
  let component: FormTablePigsComponent;
  let fixture: ComponentFixture<FormTablePigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTablePigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTablePigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
