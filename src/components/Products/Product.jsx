import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({product, onAddToCart}) => {
      const classes = useStyles()
  return (<>
      <Card className={classes.root}>
                  <CardMedia md={{ width: 151 }} className={classes.media} image={product.image.url} title={product.name}/>
            <CardContent>
                  <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                              {product.name}
                        </Typography>
                        <Typography variant="h5" >
                        </Typography>
                  </div>
                  <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary">
                  </Typography>  
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                  <IconButton aria-label="Add to Card" onClick={()=>{onAddToCart(product.id, 1)}}>
                        <AddShoppingCart/>
                  </IconButton>
            </CardActions>
      </Card>
      </>  

  )
}

export default Product