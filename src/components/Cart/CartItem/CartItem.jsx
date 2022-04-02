import React from 'react'
import {Typography, Button, Card , CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './styles'

const CartItem = ({item, handleUpdateCartQuantity, handleRemoveFromCart}) => {
      const classes = useStyles()
  return (
    <Card className={classes.cartItem}>
          <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
          <CardContent className={classes.cardContent}>
                <Typography variant='h6'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
          </CardContent>
          <CardActions className={classes.cartActions}>
                  <div className={classes.buttons}>
                        <Button type='button' size='small' onClick={()=> {handleUpdateCartQuantity(item.id, item.quantity - 1)}}>-</Button>
                        <Typography>{item.quantity}</Typography>
                        <Button type='button' size='small' onClick={()=>{handleUpdateCartQuantity(item.id, item.quantity + 1)}}>+</Button>
                  </div>
                  <Button style={{marginRight: 8}}variant='contained' type='button' color="secondary" onClick={()=>{handleRemoveFromCart(item.id)}}>Remove</Button>
          </CardActions>
    </Card>
  )
}

export default CartItem