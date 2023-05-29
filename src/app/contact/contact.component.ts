import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private toaster: ToastrService) {
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      cvProfiles: this.formBuilder.array([this.createCvProfile()])
    });
  }

  ngOnInit() { }

  get cvProfiles() {
    return this.form.get('cvProfiles') as FormArray;
  }

  createCvProfile(): FormControl {
    return this.formBuilder.control('', Validators.required);
  }

  addCvProfile() {
    this.cvProfiles.push(this.createCvProfile());
  }

  removeCvProfile(index: number) {
    this.cvProfiles.removeAt(index);
  }

  submitForm() {
    if (this.form.valid) {
      // Handle form submission logic here
      this.toaster.success('Form has been Submited')
      // Reset the form
      this.form.reset();
    }
  }
}
