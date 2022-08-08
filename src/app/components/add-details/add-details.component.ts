import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-details.component.html',
})
export class AddDetailsComponent implements OnInit {
  submitted = false;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  get form() {
    return this.addForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.addForm);
  }
}
