import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTableUserComponent } from './form-table-user.component';

describe('FormTableUserComponent', () => {
  let component: FormTableUserComponent;
  let fixture: ComponentFixture<FormTableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTableUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
