import React, {useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Grid, Button, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'

import CustomTextField from './CustomTextField'

import { commerce } from '../../lib/commerce'

const AddresForm = ({ checkoutToken, next }) => {
  const methods = useForm()
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')

  const fetchShippingCountries = async (checkoutTokenId) =>{
    // IT RETURNS AN OBJECT THAT HAS A KEY OF CONTRIES THAT TAKES YOU TO THE ACTUAL OBJECT OF COUNTRIES
    const countries = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setShippingCountries(countries.countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchSubdivisions = async  (countryCode) =>{
    const { subdivisions } =  await commerce.services.localeListSubdivisions(countryCode)
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  const fetchOptions = async  (checkoutTokenId, country, region = null) =>{
    const  options  =  await commerce.checkout.getShippingOptions(checkoutTokenId,  { country, region })
    setShippingOptions(options)
    setShippingOption(options[0].id)
  }

  useEffect(()=>{
    fetchShippingCountries(checkoutToken.id)
  }, [])
  useEffect(()=>{
    if(shippingCountry) fetchSubdivisions(shippingCountry)
  },[shippingCountry])
  useEffect(()=>{
    if(shippingSubdivision) fetchOptions(checkoutToken.id, shippingCountry,  shippingSubdivision)
  },[shippingSubdivision])

  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
          <Grid container spacing={3}>
            <CustomTextField required name='firstName' ref={methods.register} label='First name'/>
            <CustomTextField required name='lastName' label='Last name'/>
            <CustomTextField required name='address1' label='Address'/>
            <CustomTextField required name='email' label='Email'/>
            <CustomTextField required name='city' label='City'/>
            <CustomTextField required name='zip' label='ZIP / Postal Code'/>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e)=>{setShippingCountry(e.target.value)}}>
              {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e)=>{setShippingSubdivision(e.target.value)}}>
              {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e)=>{shippingOption(e.target.value)}}>
              {shippingOptions.map((options) => ({ id: options.id, label: `${options.description} - (${options.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
              ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button component={Link} to="/cart" variant='outlined'>Back to Cart</Button>
                <Button type="submit" color="primary" variant='contained'>Next</Button>
          </div>
        </form>

      </FormProvider>
    </>
  )
}

export default AddresForm