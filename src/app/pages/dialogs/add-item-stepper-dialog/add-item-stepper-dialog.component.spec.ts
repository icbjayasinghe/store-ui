import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemStepperDialogComponent } from './add-item-stepper-dialog.component';

describe('AddItemStepperDialogComponent', () => {
  let component: AddItemStepperDialogComponent;
  let fixture: ComponentFixture<AddItemStepperDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemStepperDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemStepperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
