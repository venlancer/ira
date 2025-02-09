import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  enquiryForm: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.enquiryForm = this.fb.group({
      company: ['', Validators.required],
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      desc: ['', Validators.required]
    });
  }

  
  ngOnInit(): void {
  }

  submitEnquiry() {
    if (this.enquiryForm.valid) {
      const { company, name, contact, email, desc } = this.enquiryForm.value;

      this.customerService.addCustomerEnquiry(company, name, contact, email, desc).subscribe(
        response => {
          console.log('Enquiry submitted successfully:', response);
          this.successMessage = 'Your message has been sent successfully!';
          this.submitted = true;
          this.enquiryForm.reset();
        },
        error => {
          console.error('Error submitting enquiry:', error);
        }
      );
    }
  }

}
