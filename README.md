
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


// Create product / product update
- webhook to run graphql mutation to create pick location meta field




// Update product