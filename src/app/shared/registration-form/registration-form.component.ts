import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationOptions = [
    { type: 'Speaker (In-Person)', earlyBird: '$699', midTerm: '$799', late: '$899', price: 699 },
    { type: 'Delegate (In-Person)', earlyBird: '$799', midTerm: '$899', late: '$999', price: 799 },
    { type: 'Student/Young Researcher/Poster Presentation (In-Person)', earlyBird: '$499', midTerm: '$599', late: '$699', price: 499 },
    { type: 'Virtual Presentation (Online through ZOOM)', earlyBird: '$299', midTerm: '$399', late: '$499', price: 299 },
    { type: 'Exhibition Sponsor', earlyBird: '$1999', midTerm: '$2999', late: '$3999', price: 1999 },
    { type: 'Package A (Registration + two nights accommodation)', earlyBird: '$1199', midTerm: '$1299', late: '$1399', price: 1199 },
    { type: 'Package B (Registration + three nights accommodation)', earlyBird: '$1499', midTerm: '$1599', late: '$1699', price: 1499 }
  ];

  // Selected registration option
  selectedOption: any = null;
  refundPolicy = false; 

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

  isSubmitting = false;

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {}

  onSubmit(form: any): void {
    if (!form.valid || !this.selectedOption) {
      alert('Please fill out all required fields correctly and select a registration option!');
      return;
    }

    this.isSubmitting = true;

    // Prepare the correct payload structure for Hasura API
    const registrationData = {
      designation: this.formData.designation,
      full_name: this.formData.fullName,
      company_name: this.formData.companyName,
      country: this.formData.country,
      email: this.formData.email,
      phone: this.formData.phone,
      dietary_requirements: this.formData.dietaryRequirements || null,
      registration_type: this.selectedOption.type, // Selected participation type
      registration_price: this.selectedOption.price // Price of selected option
    };

    console.log("Sending registration data to Hasura:", registrationData);

    // Send data to Hasura API
    this.registrationService.submitRegistration(registrationData).subscribe(
      (response) => {
        console.log('Response from Hasura:', response);
        alert('Registration submitted successfully!');
        this.onReset(form);
      },
      (error) => {
        console.error('Error submitting registration:', error);
        alert('Failed to submit registration. Please try again.');
      }
    );
  }

  onReset(form?: any): void {
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
    this.isSubmitting = false;
  
    if (form) {
      form.resetForm(); // ✅ Reset Angular's form state
    }
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
