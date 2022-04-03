import React, {useState, useEffect} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

import useStyles from './styles'

import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

import { commerce } from '../../../lib/commerce'

const steps = [
      'Shipping address', 'Payment details'
]

const Checkout = ({ cart,order, onCaptureCheckout, error }) => {
      const classes = useStyles()
      const history = useHistory()
      const [activeStep, setActiveStep] = useState(0)
      const [checkoutToken, setCheckoutToken] = useState('')
      const [shippingData, setShippingData] = useState({})
      const [isFinished, setIsFinished] = useState(false)

      useEffect(()=>{
            const generateToken = async () =>{
                  try {
                        const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
                        setCheckoutToken(token)
                  } catch (error) {
                        history.pushState('/')
                  }
            }
            generateToken()
      },[cart])

      const nextStep = () =>{ setActiveStep((preActiveStep)=> preActiveStep + 1) }
      const backStep = () =>{ setActiveStep((preActiveStep)=> preActiveStep - 1) }

      const next = (data) => {

            setShippingData(data)
            nextStep()
      }

      const timeOut = () =>{
            setTimeout(()=>{
                  setIsFinished(true)
            }, 3000)
      }

      let Confirmation = () => (order.customer ? (
            <>
              <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
              </div>
              <br />
              <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
          ) : isFinished ? (
            <>
                  <div>
                        <Typography variant="h5">Thank you for your purchase!</Typography>
                        <Divider className={classes.divider} />
                  </div>
                  <br />
                  <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
          ) : (
            <div className={classes.spinner}>
              <CircularProgress />
            </div>
          ))

      if (error) {
            Confirmation = () => (
              <>
                <Typography variant="h5">Error: {error}</Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
              </>
            );
      }

      const Form = () => activeStep === 0 ? <AddressForm  checkoutToken={checkoutToken} next={next} /> : <PaymentForm  shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeOut={timeOut}/>
  return (
    <>
      <CssBaseline />
      <div className={classes.tollbar}/>
      <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                  {steps.map((step)=>(
                        <Step key={step}>
                              <StepLabel>{step}</StepLabel>
                        </Step>
                  ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
          </Paper>

    </main>
    </>
  )
}

export default Checkout