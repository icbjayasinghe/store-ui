import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item-stepper-dialog',
  templateUrl: './add-item-stepper-dialog.component.html',
  styleUrls: ['./add-item-stepper-dialog.component.scss']
})
export class AddItemStepperDialogComponent implements OnInit{

  firstForm!: FormGroup;
  secondForm!: FormGroup;
  thirdForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  
  ngOnInit(): void {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
  
}
