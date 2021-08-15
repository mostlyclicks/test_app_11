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
// metafields mutation

// mutation productUpdate($input: ProductInput!) {
//   productUpdate(input: $input) {
//     product {
//       id
//       title
//       description
//       metafields (first: 10) {
//         edges {
//           node {
//             id
//           }
//         }
        
//       }
//     }
//     userErrors {
//       field
//       message
//     }
    
//   }
// }