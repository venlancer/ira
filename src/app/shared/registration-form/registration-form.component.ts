import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationOptions = [
    {
      type: 'Speaker (In-Person)',
      earlyBird: '$699',
      midTerm: '$799',
      late: '$899',
      price: 699
    },
    {
      type: 'Delegate (In-Person)',
      earlyBird: '$799',
      midTerm: '$899',
      late: '$999',
      price: 799
    },
    {
      type: 'Student/Young Researcher/Poster Presentation (In-Person)',
      earlyBird: '$499',
      midTerm: '$599',
      late: '$699',
      price: 499
    },
    {
      type: 'Virtual Presentation (Online through ZOOM)',
      earlyBird: '$299',
      midTerm: '$399',
      late: '$499',
      price: 299
    },
    {
      type: 'Exhibition Sponsor',
      earlyBird: '$1999',
      midTerm: '$2999',
      late: '$3999',
      price: 1999
    },
    {
      type: 'Package A (Registration + two nights accommodation)',
      earlyBird: '$1199',
      midTerm: '$1299',
      late: '$1399',
      price: 1199
    },
    {
      type: 'Package B (Registration + three nights accommodation)',
      earlyBird: '$1499',
      midTerm: '$1599',
      late: '$1699',
      price: 1499
    }
  ];

  // Selected registration option
  selectedOption: any = null;
  refundPolicy = false; // Refund policy checkbox

  designations = ['Mr.', 'Dr.', 'Mrs.', 'Miss', 'Prof.', 'Ms.'];
  countries = ['United States', 'Canada', 'India', 'Germany', 'Australia'];
  dietaryOptions = ['Veg', 'Non-Veg', 'Vegan'];

  formData = {
    designation: '',
    fullName: '',
    companyName: '',
    country: '',
    email: '',
    phone: '',
    dietaryRequirements: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Selected Registration Option:', this.selectedOption);
      console.log('Form Data:', this.formData);
      console.log('Refund Policy Agreement:', this.refundPolicy);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all required fields correctly!');
    }
  }

  onReset(): void {
    this.formData = {
      designation: '',
      fullName: '',
      companyName: '',
      country: '',
      email: '',
      phone: '',
      dietaryRequirements: '',
    };
    this.selectedOption = null;
    this.refundPolicy = false;
  }

  // Allow only numeric input in the phone number field
  onlyNumberKey(event: KeyboardEvent): boolean {
    const charCode = event.keyCode ? event.keyCode : event.which;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }

}
