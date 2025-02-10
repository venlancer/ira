import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators, FormArray } from '@angular/forms';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-abstract-submission',
  templateUrl: './abstract-submission.component.html',
  styleUrls: ['./abstract-submission.component.scss']
})
export class AbstractSubmissionComponent implements OnInit {

  titles = ['Dr.', 'Mr.', 'Ms.', 'Prof.'];
  countries = ['United States', 'Canada', 'India', 'Germany', 'Australia'];
  categories = ['Research', 'Review', 'Case Study', 'Technical'];

  formData = {
    title: '',
    fullName: '',
    email: '',
    phone: '',
    country: '',
    authorsAffiliation: '',
    contactAddress: '',
    abstractCategory: '',
  };

  file: File | null = null;

   // Regular expressions for email and phone validations
   emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   phonePattern = /^[0-9]{10}$/;

  constructor(private fb: UntypedFormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  onFileChange(event: any): void {
    this.file = event.target.files[0];
  }

  onSubmit(form: any): void {
    if (
      form.valid &&
      this.file &&
      this.emailPattern.test(this.formData.email) &&
      this.phonePattern.test(this.formData.phone)
    ) {
      console.log('Form Data:', this.formData);
      console.log('File:', this.file);
      alert('Abstract submitted successfully!');
    } else {
      alert('Please fill out all required fields correctly!');
    }
  }

  // Allow only numeric input in the phone number field
  onlyNumberKey(event: KeyboardEvent): boolean {
    const charCode = event.keyCode ? event.keyCode : event.which;
    // Allow only numbers (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onReset(): void {
    this.formData = {
      title: '',
      fullName: '',
      email: '',
      phone: '',
      country: '',
      authorsAffiliation: '',
      contactAddress: '',
      abstractCategory: '',
    };
    this.file = null;
  }


}
