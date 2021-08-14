import { useState, useMemo, useCallback } from 'react'
import { Button, Stack, Card, Heading, Page, TextField, DataTable, EmptyState, Link, Toast, Frame } from "@shopify/polaris";
import { ResourcePicker } from '@shopify/app-bridge-react';

import { useMutation } from 'react-apollo'
import {ProductUpdateMutation} from '../graphql/ProductUpdate'


const Index = () => {

  const [appendToTitle, setAppendToTitle] = useState('')
  const [appendToDescription, setAppendToDescription] = useState('')
  const [pickerOpen, setPickerOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [showToast, setShowToast] = useState(false)

  const [updateProduct] = useMutation(ProductUpdateMutation)

  const productTableDisplayData = useMemo(() => products.map((product) => [
    product.id,
    product.title,
    `${product.title} ${appendToTitle}`,
    product.descriptionHtml,
    `${product.descriptionHtml} ${appendToDescription}`
  ]), [products, appendToTitle, appendToDescription])

  const submitHandler = useCallback(() => {
      
    let count = 0
    const runMutation = (product) => {
      updateProduct({
        variables: {
          input: {
            descriptionHtml: `${product.descriptionHtml}${appendToDescription}`,
            title: `${product.title}${appendToTitle}`,
            id: product.id
          }
        }
      }).then((data) => {
        console.log('Updated Product', count, data)
        count++
        if(products[count]) runMutation(products[count])
        else {
          console.log('Updates complete')
          setShowToast(true)
        }
      })
    }
    runMutation(products[count])
    },[products, appendToTitle, appendToDescription],
  )

  const toastMarkup = showToast ?

  <Toast
    content="update success"
    onDismiss={() => setShowToast(false)}
    duration={4000}
  /> : null


  return (
  <Frame>
  <Page>
    <Heading>This is a Shopify App 2</Heading>
    <Card>
      <Card.Section>
        <Link url="/about">About this app</Link>
      </Card.Section>
      <Card.Section>
        <Stack vertical>
          <TextField
            label="Append to Title"
            value={appendToTitle}
            onChange={setAppendToTitle}
          />
          <TextField
            label="Append to Description"
            value={appendToDescription}
            onChange={setAppendToDescription}
            multiline={3}
          />
          <ResourcePicker
            resourceType="Product"
            showVariant={false}
            open={pickerOpen}
            onSelection={(resources) => {
              console.log(resources)
              setProducts(resources.selection)
            }}
          />
          <Button primary onClick={() => setPickerOpen(true)}>Select Products</Button>
        </Stack>
      </Card.Section>
      <Card.Section>
            {productTableDisplayData.length ? <DataTable
              columnContentTypes={['text', 'text', 'text', 'text', 'text']}
              headings={['ID', 'Old Title', 'New Title', 'Old Description', 'New Description']}
              rows={productTableDisplayData}
            /> : <EmptyState heading="no products selected" />}

      </Card.Section>
      <Card.Section>
            <Button primary onClick={submitHandler} disabled={!products.length}>Submit</Button>
      </Card.Section>
    </Card>
  </Page>
  {toastMarkup}
  </Frame>
  )
  };

export default Index;
