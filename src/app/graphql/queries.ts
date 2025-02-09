import { gql } from '@apollo/client/core';

export const GET_USERS = gql`
  query {
    ira_userCollection {
      edges {
        node {
          id
          user_name
          created_at
        }
      }
    }
  }
`;

export const GET_EVENTS = gql`
  query {
    eventsCollection {
      edges {
        node {
          id
          title
          short_description
          organised_by
          start_date
          end_date
          image_url
          titleID,
          event_type
        }
      }
    }
  }
`;

export const ADD_CUSTOMER_ENQUIRY = gql`
  mutation ($company: String!, $name: String!, $contact: String!, $email: String!, $desc: String!) {
    insertIntocustomerCollection(objects: {
      Company: $company,
      Name: $name,
      contact: $contact,
      email: $email,
      desc: $desc
    }) {
      affectedCount
    }
  }
`;

// Mutation to add a new user (Example)
export const ADD_USER = gql`
  mutation ($user_name: String!) {
    insert_user(objects: { user_name: $user_name }) {
      returning {
        id
        user_name
        created_at
      }
    }
  }
`;
