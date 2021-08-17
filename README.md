
//Create Private metafield (one time)
mutation privateMetafieldUpsert($input: PrivateMetafieldInput!) {
  privateMetafieldUpsert(input:$input) {
    privateMetafield {
      id
    }
    userErrors {
      field
      message
    }
  }
}


// Create product / product update --- when product is created
- webhook to run graphql mutation to create pick location meta field

mutation productUpdate($input: ProductInput!) {
  productUpdate(input: $input) {
    product {
      id
    }
    userErrors {
      field
      message
    }
  }
}




// Update product



///Webhooks
//WebhookSubscriptionTopics



//add handlers folder
//add mutations
// add-product-metafield