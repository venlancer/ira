import { Injectable } from '@angular/core';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  private apollo: ApolloClient<any>;

  constructor() {
    this.apollo = new ApolloClient({
      uri: `${environment.supabaseUrl}/graphql/v1`, // Supabase GraphQL endpoint
      cache: new InMemoryCache(),
      headers: {
        'apikey': environment.supabaseAnonKey
      }
    });
  }

  getApolloClient() {
    return this.apollo;
  }
}
