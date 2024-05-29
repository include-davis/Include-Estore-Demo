/*
A mutation that I hope works that's meant to save the billing info
so that we don't have to go on Stripe to see it
*/

import { gql } from '@apollo/client';

export const SAVE_BILLING_INFO = gql`
  mutation SaveBillingInfo(
    $secret: String!
    $id: String!
    $name: String!
    $address: String!
    $address2: String
    $city: String!
    $state: String!
    $zip: String!
    $phone: String!
    $paymentMethod: String!
  ) {
    saveBillingInfo(
      secret: $secret
      id: $id
      name: $name
      address: $address
      address2: $address2
      city: $city
      state: $state
      zip: $zip
      phone: $phone
      paymentMethod: $paymentMethod
    ) {
      success
      message
    }
  }
`;
