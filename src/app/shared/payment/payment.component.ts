import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  paymentAmount: number = 0;
  registrationData: any;
  pageName:string='';

  constructor(public router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.data) {
      this.registrationData = navigation.extras.state.data;
      this.paymentAmount = this.registrationData.registration_price; // Get amount from registration
    } else {
      this.router.navigate(['/registration']); // Redirect if no data
    }
  }

  ngOnInit(): void {
    this.pageName = this.route.snapshot['_routerState'].url.split('/')[1];
    this.initPaypalConfig();
  }

  private initPaypalConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AW8YvvpyLIqYNq6kBwkidl2nm2KupDiECO96UHGNU_t10sev7iSrIcSIBYxDFQirMvCbKUecVurHvUZj', // Replace with your PayPal Client ID
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.paymentAmount.toString(), // ✅ Dynamic price
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.paymentAmount.toString()
                }
              }
            },
            items: [
              {
                name: this.registrationData.registration_type, // ✅ Show selected registration type
                quantity: '1',
                unit_amount: {
                  currency_code: 'USD',
                  value: this.paymentAmount.toString()
                }
              }
            ]
          }
        ]
      },
      advanced: { commit: 'true' },
      style: { layout: 'vertical', color: 'blue', shape: 'pill' },
      onApprove: (data, actions) => {
        // console.log('✅ Payment Approved:', data);
        actions.order.capture().then((details) => {
          // console.log('✅ Transaction Successful:', details);
          // alert('🎉 Payment Successful! Redirecting to home...');
          this.router.navigate(['/'+this.pageName]); // ✅ Redirect to home after success
        });
      },
      onCancel: (data) => {
        // console.log('❌ Payment Canceled:', data);
        // alert('Payment was canceled. Returning to registration page...');
        this.cancelBtn();
      },
      onError: (err) => {
        // console.error('❌ Payment Error:', err);
        // alert('Something went wrong. Please try again.');
      }
    };
  }

  cancelBtn(){
    this.router.navigate(['/'+this.pageName+'/event-registration']); // ✅ Redirect to registration on cancel
  }
}
