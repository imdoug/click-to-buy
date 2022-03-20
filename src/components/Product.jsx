import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Products/Product.jsx'

import useStyles from './styles'


const produtcts = [
      {id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: "https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw9389f98f/original/120306/120306-077-a-addiction-14-womens-support-running-shoe.png?sw=767&sh=767&sm=fit"},
      {id: 2, name: "Macbook", description: "Apple Macbook.", price: "$999", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HA244?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1631831826000"}
]

const Produtcs = () =>{
      const classes = useStyles()
      return (
            <main className={classes.content}>
                  <div className={classes.toolbar}/>
                  <Grid container justifyContent="center" spacing={4}>
                        {produtcts.map((product)=>(
                              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product}/>
                              </Grid>
                              ))}
                  </Grid>
            </main>
      )
}

export default Produtcs