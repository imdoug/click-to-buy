import React, {useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'

import CustomTextField from './CustomTextField'

import { commerce } from '../../lib/commerce'

const AddresForm = ({ checkoutToken }) => {
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

  useEffect(()=>{
    fetchShippingCountries(checkoutToken.id)
  }, [])


  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods} >
        <form onSubmit=''>
          <Grid container spacing={3}>
            <CustomTextField required name='firstName' label='First name'/>
            <CustomTextField required name='lastName' label='Last name'/>
            <CustomTextField required name='adress1' label='Address'/>
            <CustomTextField required name='email' label='Email'/>
            <CustomTextField required name='city' label='City'/>
            <CustomTextField required name='zip' label='ZIP / Postal Code'/>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value ={shippingCountry} fullWidth onChange={(e)=>{setShippingCountry(e.target.value)}}>
              {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value ={} fullWidth onChange={}>
                <MenuItem key={} value={}>Select Me</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value ={} fullWidth onChange={}>
                <MenuItem key={} value={}>Select Me</MenuItem>
              </Select>
            </Grid> */}

          </Grid>
        </form>

      </FormProvider>
    </>
  )
}

export default AddresForm