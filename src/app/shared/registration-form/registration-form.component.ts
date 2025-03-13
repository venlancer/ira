import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationOptions = [
    { type: 'Speaker (In-Person)', earlyBird: 699, midTerm: 799, late: 899 },
    { type: 'Delegate (In-Person)', earlyBird: 799, midTerm: 899, late: 999 },
    { type: 'Student/Young Researcher/Poster Presentation (In-Person)', earlyBird: 499, midTerm: 599, late: 699 },
    { type: 'Virtual Presentation (Online through ZOOM)', earlyBird: 299, midTerm: 399, late: 499 },
    { type: 'Exhibition Sponsor', earlyBird: 1999, midTerm: 2999, late: 3999 },
    { type: 'Package A (Registration + two nights accommodation)', earlyBird: 1199, midTerm: 1299, late: 1399 },
    { type: 'Package B (Registration + three nights accommodation)', earlyBird: 1499, midTerm: 1599, late: 1699 }
  ];

  selectedOption: any = null;
  customPrice: number | null = null;
  otherOption: any = { type: 'Other', price: 0 };
  refundPolicy = false;

  designations = ['Mr.', 'Dr.', 'Mrs.', 'Miss', 'Prof.', 'Ms.'];
  countries = ['United States', 'Canada', 'India', 'Germany', 'Australia'];
  dietaryOptions = ['Veg', 'Non-Veg', 'Vegan'];
  pageName: string = '';
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

  constructor(private registrationService: RegistrationService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageName = this.route.snapshot['_routerState'].url.split('/')[1];
  }

  // Function to update "Other" option price dynamically
  updateOtherPrice(): void {
    if (this.customPrice !== null && this.customPrice >= 0) {
      this.otherOption.price = this.customPrice;
    } else {
      this.otherOption.price = 0;
    }
  }

  // Get correct numeric price based on current registration period
  getCurrentPrice(option: any): number {
    const today = new Date();
    const earlyBirdEnd = new Date('2025-01-15');
    const midTermStart = new Date('2025-01-16');
    const midTermEnd = new Date('2025-02-15');
    const lateStart = new Date('2025-02-16');
    const lateEnd = new Date('2025-04-14');

    if (today <= earlyBirdEnd) return option.earlyBird;
    if (today >= midTermStart && today <= midTermEnd) return option.midTerm;
    if (today >= lateStart && today <= lateEnd) return option.late;
    
    return 0; // Registration closed or invalid selection
  }

  onSubmit(form: any): void {
    if (!form.valid || !this.selectedOption) {
      alert('Please fill out all required fields correctly and select a registration option!');
      return;
    }

    let finalPrice: number = 0;

    if (this.selectedOption.type === 'Other') {
      finalPrice = this.otherOption.price;
    } else {
      finalPrice = this.getCurrentPrice(this.selectedOption);
    }

    if (isNaN(finalPrice) || finalPrice <= 0) {
      alert('Please enter a valid registration price.');
      return;
    }

    this.isSubmitting = true;

    // Prepare registration data for API
    const registrationData = {
      designation: this.formData.designation,
      full_name: this.formData.fullName,
      company_name: this.formData.companyName,
      country: this.formData.country,
      email: this.formData.email,
      phone: this.formData.phone,
      dietary_requirements: this.formData.dietaryRequirements || null,
      registration_type: this.selectedOption.type,
      registration_price: finalPrice
    };

    console.log("Sending registration data to Hasura:", registrationData);

    // Send data to Hasura API
    this.registrationService.submitRegistration(registrationData).subscribe(
      (response) => {
        this.router.navigate(['/' + this.pageName + '/payment'], { state: { data: registrationData } });
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
    this.customPrice = null;
    this.otherOption.price = 0;
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
