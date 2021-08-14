import {gql} from 'apollo-boost'

export const ProductUpdateMutation = gql`
mutation productUpdate($input: ProductInput!) {
  productUpdate(input: $input) {
    product {
      id
      title
      description
    }
    userErrors {
      field
      message
    }
  }
}


`