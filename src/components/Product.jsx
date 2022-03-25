import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Products/Product.jsx'

import useStyles from './styles'

const Produtcs = ({ products, onAddToCart }) =>{
      const classes = useStyles()
      return (
            <main className={classes.content}>
                  <Grid container justifyContent="center" spacing={9}>
                        {products.map((product)=>(
                              <Grid item key={product.id} xs={12} sm={6} md={6} lg={4}>
                                    <Product product={product} onAddToCart={onAddToCart}/>
                              </Grid>
                              ))}
                  </Grid>
            </main>
      )
}

export default Produtcs