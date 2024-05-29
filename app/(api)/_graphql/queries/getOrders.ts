// Queries for grabbing orders that I hope works T_T

import { gql } from '@apollo/client';

export const GET_ALL_ORDERS = gql`
  query GetAllOrders {
    orders {
      id
      secret
      name
      address
      address2
      city
      state
      zip
      phone
      paymentMethod
      createdAt
      updatedAt
    }
  }
`;

export const GET_ORDER_BY_ID = gql`
  query GetOrderById($id: [ID]) {
    order(id: $id) {
      id
      secret
      name
      address
      address2
      city
      state
      zip
      phone
      paymentMethod
      createdAt
      updatedAt
    }
  }
`;
