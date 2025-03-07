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
          titleID
          event_type
        }
      }
    }
  }
`;

export const ADD_CUSTOMER_ENQUIRY = gql`
  mutation AddCustomerEnquiry(
    $company: String!,
    $name: String!,
    $contact: String!,
    $email: String!,
    $description: String!
  ) {
    insertIntocustomerCollection(objects: {
      company: $company,
      name: $name,
      contact: $contact,
      email: $email,
      description: $description
    }) {
      affectedCount
    }
  }
`;

// Mutation to add a new user
export const ADD_USER = gql`
  mutation ($user_name: String!) {
    insertIntoira_userCollection(objects: { user_name: $user_name }) {
      returning {
        id
        user_name
        created_at
      }
    }
  }
`;

// Fetch create_event details along with sessions, schedule, and pricing
export const GET_CREATE_EVENT_DETAILS = gql`
  query GetCreateEventWithDetails($create_event_id: UUID!) {
    create_eventsCollection(filter: { id: { eq: $create_event_id } }) {
      edges {
        node {
          id
          event_id
          name
          description
          venue
          contact
          deadline
          early_bird
          mid_term
          late_term
          end_date
          event_image

          event_sessionsCollection {
            edges {
              node {
                id
                title
                items
              }
            }
          }

          event_scheduleCollection {
            edges {
              node {
                id
                day_label
                time
                title
                description
              }
            }
          }

          event_pricingCollection {
            edges {
              node {
                id
                participation_type
                early_bird_price
                mid_term_price
                late_price
              }
            }
          }
        }
      }
    }
  }
`;

export const ADD_CREATE_EVENT = gql`
  mutation AddCreateEvent($objects: [create_eventsInsertInput!]!) {
    insertIntocreate_eventsCollection(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

export const ADD_EVENT_SESSIONS = gql`
  mutation AddEventSessions($sessions: [event_sessionsInsertInput!]!) {
    insertIntoevent_sessionsCollection(objects: $sessions) {
      returning {
        id
      }
    }
  }
`;

export const ADD_EVENT_SCHEDULE = gql`
  mutation AddEventSchedule($schedule: [event_scheduleInsertInput!]!) {
    insertIntoevent_scheduleCollection(objects: $schedule) {
      returning {
        id
      }
    }
  }
`;

export const ADD_EVENT_PRICING = gql`
  mutation AddEventPricing($pricing: [event_pricingInsertInput!]!) {
    insertIntoevent_pricingCollection(objects: $pricing) {
      returning {
        id
      }
    }
  }
`;

export const GET_NEW_EVENTS = gql`
  query {
    new_eventCollection {
      edges {
        node {
          id
          event_name
          venue
          description
          contact
          deadline
          event_image
          scientific_sessions
          conference_schedule
          early_bird
          mid_term
          late_term
          end_date
          registration_prices
        }
      }
    }
  }
`;

export const GET_NEW_EVENT_BY_ID = gql`
  query GetNewEventById($id: UUID!) {
    new_eventCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          event_name
          venue
          description
          contact
          deadline
          event_image
          scientific_sessions
          conference_schedule
          early_bird
          mid_term
          late_term
          end_date
          registration_prices
        }
      }
    }
  }
`;


export const ADD_NEW_EVENT = gql`
  mutation AddNewEvent($objects: [new_eventInsertInput!]!) {
    insertIntonew_eventCollection(objects: $objects) {
      returning {
        id
        event_name
      }
    }
  }
`;

export const UPDATE_NEW_EVENT = gql`
  mutation UpdateNewEvent($id: UUID!, $patch: new_eventUpdateInput!) {
    updateIntonew_eventCollection(filter: { id: { eq: $id } }, set: $patch) {
      affectedCount
    }
  }
`;

export const DELETE_NEW_EVENT = gql`
  mutation DeleteNewEvent($id: UUID!) {
    deleteFromnew_eventCollection(filter: { id: { eq: $id } }) {
      affectedCount
    }
  }
`;
