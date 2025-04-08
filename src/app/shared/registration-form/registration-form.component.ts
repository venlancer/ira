import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

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

  earlyBirdEndDate!: Date;
  midTermStartDate!: Date;
  midTermEndDate!: Date;
  lateTermStartDate!: Date;
  registrationDeadline!: Date;
  selectedOption: any = null;
  customPrice: number | null = null;
  otherOption: any = { type: 'Other', price: 0 };
  refundPolicy = false;
  isRegistrationClosed: boolean = false;
  designations = ['Mr.', 'Dr.', 'Mrs.', 'Miss', 'Prof.', 'Ms.'];
  countries: string[] = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla',
    'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia',
    'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
    'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina',
    'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam',
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde',
    'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island',
    'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the',
    'Cook Islands', 'Costa Rica', 'Côte d\'Ivoire', 'Croatia (Hrvatska)', 'Cuba', 'Cyprus',
    'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia',
    'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France',
    'France, Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland',
    'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti',
    'Heard and Mc Donald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong',
    'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland',
    'Israel', 'Italy', 'Jamaica', 'Japan', 'United States', 'United Kingdom'];
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
  pageDetailItems: any;

  constructor(private registrationService: RegistrationService, private router: Router, private route: ActivatedRoute, private eventServices: EventService) { }

  ngOnInit(): void {
    this.pageName = this.route.snapshot['_routerState'].url.split('/')[1];
    this.getDetails();
  }

  getDetails() {
    this.eventServices.getCompleteDetails(localStorage.getItem('id')).subscribe(e => {
      this.pageDetailItems = e['events_by_pk'];
      this.earlyBirdEndDate = new Date(this.pageDetailItems.early_bird);     // "2025-06-25"
      this.midTermStartDate = new Date(this.pageDetailItems.mid_term);       // "2025-07-01"
      this.lateTermStartDate = new Date(this.pageDetailItems.late_term);     // "2025-07-15"
      this.registrationDeadline = new Date(this.pageDetailItems.deadline);   // "2025-08-25
      this.isRegistrationClosed = new Date() > new Date(this.pageDetailItems.deadline);

    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const inputs = document.querySelectorAll('input, select');
      inputs.forEach((input: any) => {
        input.dispatchEvent(new Event('input'));
      });
    }, 500); // Wait a little to allow autofill to complete
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

    if (this.earlyBirdEndDate && today <= this.earlyBirdEndDate) {
      return option.earlyBird;
    }
    if (this.midTermStartDate && today >= this.midTermStartDate && today < this.lateTermStartDate) {
      return option.midTerm;
    }
    if (this.lateTermStartDate && today >= this.lateTermStartDate && today <= this.registrationDeadline) {
      return option.late;
    }

    return 0; // After deadline or invalid case
  }

  onSubmit(form: any): void {
    const missingFields: string[] = [];
  
    if (!this.formData.designation) missingFields.push('Designation');
    if (!this.formData.fullName) missingFields.push('Full Name');
    if (!this.formData.companyName) missingFields.push('Company Name');
    if (!this.formData.country) missingFields.push('Country');
    if (!this.formData.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.formData.email)) {
      missingFields.push('Valid Email');
    }
    if (!this.formData.phone || !/^[0-9]{10}$/.test(this.formData.phone)) {
      missingFields.push('Valid 10-digit Phone Number');
    }
    if (!this.selectedOption) missingFields.push('Registration Option');
    if (!this.refundPolicy) missingFields.push('Refund/Cancellation Policy Agreement');
  
    // ✅ Check if registration is closed
    const today = new Date();
    if (this.registrationDeadline && today > this.registrationDeadline) {
      alert('Registration is closed. You cannot proceed further.');
      return;
    }
  
    if (missingFields.length > 0) {
      alert('Please provide the following required fields:\n- ' + missingFields.join('\n- '));
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
