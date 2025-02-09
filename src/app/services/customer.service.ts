import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ADD_CUSTOMER_ENQUIRY } from '../graphql/queries';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private apollo: Apollo) {}

  addCustomerEnquiry(company: string, name: string, contact: string, email: string, desc: string) {
    return this.apollo.mutate({
      mutation: ADD_CUSTOMER_ENQUIRY,
      variables: { company, name, contact, email, desc }
    });
  }
}
